"use client";
import { useEffect, useState } from "react";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const COOKIE_NAME = "msd_consent";
const MAX_AGE = 60 * 60 * 24 * 180; // 180 Tage

function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  // 1) aus Cookie lesen
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  if (m) {
    try { return JSON.parse(decodeURIComponent(m[1])); } catch {}
  }
  // 2) fallback: localStorage
  try {
    const v = localStorage.getItem(COOKIE_NAME);
    return v ? JSON.parse(v) : null;
  } catch {}
  return null;
}

function writeConsent(c: Consent) {
  const val = encodeURIComponent(JSON.stringify(c));
  document.cookie = `${COOKIE_NAME}=${val}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
  try { localStorage.setItem(COOKIE_NAME, JSON.stringify(c)); } catch {}
}

export function getConsentSync(): Consent | null {
  return readConsent();
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setOpen(true);
  }, []);

  function save(newConsent: Consent) {
    writeConsent(newConsent);
    setOpen(false);
    // optional: ein Custom-Event feuern, damit andere Komponenten (z. B. Analytics) reagieren
    window.dispatchEvent(new Event("consentchange"));
  }

  function acceptAll() {
    save({ essential: true, analytics: true, marketing: true, timestamp: new Date().toISOString() });
  }

  function acceptEssential() {
    save({ essential: true, analytics: false, marketing: false, timestamp: new Date().toISOString() });
  }

  function saveSelection() {
    save({ essential: true, analytics, marketing, timestamp: new Date().toISOString() });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-4xl m-4 rounded-2xl border shadow-lg bg-white p-4">
        <h2 className="text-lg font-semibold mb-1">Cookies & Datenschutz</h2>
        <p className="text-sm text-slate-700 mb-3">
          Wir verwenden essenzielle Cookies für den Betrieb der Seite. Optional können Sie
          der Nutzung für <strong>Statistik</strong> (z.&nbsp;B. Google Analytics) und
          <strong> Marketing</strong> zustimmen. Details in unserer{" "}
          <a href="/datenschutz/" className="underline">Datenschutzerklärung</a>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <label className="flex items-center gap-2 border rounded-lg p-3">
            <input type="checkbox" checked readOnly className="accent-green-600" />
            <span className="text-sm"><strong>Essentiell</strong> (immer aktiv)</span>
          </label>
          <label className="flex items-center gap-2 border rounded-lg p-3">
            <input
              type="checkbox"
              className="accent-green-600"
              checked={analytics}
              onChange={e => setAnalytics(e.target.checked)}
            />
            <span className="text-sm">Statistik</span>
          </label>
          <label className="flex items-center gap-2 border rounded-lg p-3">
            <input
              type="checkbox"
              className="accent-green-600"
              checked={marketing}
              onChange={e => setMarketing(e.target.checked)}
            />
            <span className="text-sm">Marketing</span>
          </label>
        </div>

        <div className="flex flex-wrap gap-2 justify-end">
          <button
            onClick={acceptEssential}
            className="px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            Nur essentielle
          </button>
          <button
            onClick={saveSelection}
            className="px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            Auswahl speichern
          </button>
          <button
            onClick={acceptAll}
            className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
