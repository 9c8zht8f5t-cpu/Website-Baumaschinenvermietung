"use client";

export default function CookieSettingsButton() {
  function resetConsent() {
    try {
      // Consent in Cookie und LocalStorage löschen
      document.cookie = "msd_consent=; Max-Age=0; Path=/; SameSite=Lax";
      localStorage.removeItem("msd_consent");
    } catch {}
    // Seite neu laden, damit der Banner wieder erscheint
    location.reload();
  }

  return (
    <button
      onClick={resetConsent}
      className="underline text-green-700 hover:text-green-800"
    >
      Cookie-Einstellungen ändern
    </button>
  );
}
