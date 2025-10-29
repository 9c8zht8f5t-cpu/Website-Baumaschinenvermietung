"use client";
import { useEffect, useState } from "react";
import { getConsentSync } from "./CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // in .env / next.config.js setzen, falls genutzt

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function check() {
      const c = getConsentSync();
      setEnabled(Boolean(c?.analytics && GA_ID));
    }
    check();
    // Reagiere auf spätere Zustimmung
    window.addEventListener("consentchange", check);
    return () => window.removeEventListener("consentchange", check);
  }, []);

  useEffect(() => {
    if (!enabled || !GA_ID) return;
    // gtag einfügen
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(s2);

    return () => {
      // Entfernen bei Seitenwechsel nicht zwingend nötig; lassen wir drin, falls du umschaltest
      s1.remove();
      s2.remove();
    };
  }, [enabled]);

  return null;
}
