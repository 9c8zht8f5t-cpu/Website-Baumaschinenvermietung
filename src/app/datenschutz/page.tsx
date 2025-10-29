// app/datenschutz/page.tsx
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata = { title: "Datenschutzerklärung" };

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-gray-800">
      <h1 className="text-3xl font-semibold">Datenschutzerklärung</h1>
      <p className="text-sm text-gray-500">Stand: 26. Oktober 2025</p>

      {/* 1) Verantwortlicher */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
        <p>
          Mietservice Digitalsanierung<br />
          Inhaber: Jacob Sittkus<br />
          Bochower Dorfstraße 65, 14550 Groß Kreutz, Deutschland
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+4915150713702" className="underline text-green-700">
            +49 1515 0713702
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:mietservice@digitalsanierung.de"
            className="underline text-green-700"
          >
            mietservice@digitalsanierung.de
          </a>
        </p>
      </section>

      {/* 2) Zwecke & Rechtsgrundlagen */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          2. Zwecke der Verarbeitung und Rechtsgrundlagen
        </h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            <strong>Bereitstellung der Website</strong> (technisch notwendige
            Verarbeitung, z. B. Server-Logs): Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einer stabilen und sicheren Bereitstellung).
          </li>
          <li>
            <strong>Kontaktanfragen</strong> (Kontaktformular/E-Mail/Telefon),
            inkl. Terminabstimmung und Angebotserstellung: Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche/vertragliche Maßnahmen).
          </li>
          <li>
            <strong>Kundentyp-Auswahl (Privat/Gewerblich)</strong> mittels Local Storage
            (Preis-Darstellung netto/brutto): Art. 6 Abs. 1 lit. f DSGVO
            (nutzerfreundliche Darstellung; nur Geräte-Speicher, keine Server-Übermittlung).
          </li>
        </ul>
      </section>

      {/* 3) Server-Logfiles */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Server-Logfiles</h2>
        <p>
          Beim Aufruf unserer Website werden automatisch Informationen (z. B. IP-Adresse,
          Datum/Uhrzeit, abgerufene Seiten, Browsertyp und -version) durch den Hosting-Provider
          erfasst. Diese Daten sind für die Auslieferung und Sicherheit der Website erforderlich
          und werden nach kurzer Zeit gelöscht oder anonymisiert. Eine Zusammenführung mit
          anderen Daten erfolgt nicht.
        </p>
      </section>

      {/* 4) Cookies & Local Storage */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          4. Cookies, Local Storage & vergleichbare Technologien
        </h2>

        <p>
          Wir verwenden <strong>essenzielle Cookies</strong> zur Bereitstellung der Website.
          Optional können Sie der Nutzung für <strong>Statistik</strong> und
          <strong> Marketing</strong> zustimmen. Ihre Auswahl wird über unseren Cookie-Banner
          gespeichert und kann jederzeit widerrufen werden.
        </p>

        <div className="rounded-lg border bg-gray-50 p-3 text-sm space-y-1">
          <p className="font-medium">Speicherungen im Rahmen des Consent-Managements:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Consent-Cookie:</strong> <code>msd_consent</code> – enthält Ihre
              Auswahl (essentiell/Statistik/Marketing), <em>Max-Age</em>: bis zu 180 Tage,
              <em> Pfad</em>: <code>/</code>, <em>SameSite</em>: <code>Lax</code>. Zusätzlich
              wird derselbe Wert im <strong>Local Storage</strong> abgelegt, um die Anzeige
              auf dem Gerät zu steuern (keine Server-Übermittlung).
            </li>
            <li>
              <strong>Kundentyp (Preis-Anzeige):</strong>{" "}
              Schlüssel <code>kundentyp</code> mit Wert <code>"privat"</code> oder{" "}
              <code>"gewerblich"</code> im <strong>Local Storage</strong>; Zweck: Darstellung
              der Preise inkl./zzgl. MwSt.; Speicherdauer: bis zur Löschung durch Sie.
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Hinweis: Local-Storage-Daten werden <em>nicht</em> automatisch an unseren Server
          übertragen. Sie können Ihre Auswahl jederzeit ändern:
        </p>

        <CookieSettingsButton />
      </section>

      {/* 5) Kontaktformular */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Kontaktformular & E-Mail</h2>
        <p>
          Bei Kontaktaufnahme verarbeiten wir Ihre Angaben (z. B. Name, E-Mail, Telefonnummer,
          Nachricht) zur Bearbeitung der Anfrage und etwaiger Rückfragen. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nur so lange gespeichert, wie es zur
          Bearbeitung erforderlich ist bzw. gesetzliche Aufbewahrungsfristen bestehen.
        </p>
      </section>

      {/* 6) Hosting & Auftragsverarbeitung */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">6. Hosting & Auftragsverarbeitung durch IONOS SE</h2>
        <p>Diese Website wird bei der <strong>IONOS SE</strong> gehostet:</p>
        <p>
          IONOS SE<br />
          Elgendorfer Straße 57<br />
          56410 Montabaur<br />
          Deutschland<br />
          Website:{" "}
          <a
            href="https://www.ionos.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-700"
          >
            www.ionos.de
          </a>
        </p>
        <p>
          IONOS verarbeitet in unserem Auftrag (Art. 28 DSGVO) Server-Logfiles, Meta- und
          Kommunikationsdaten zur Bereitstellung und Sicherheit der Website. Es besteht ein
          Auftragsverarbeitungsvertrag (AVV) mit IONOS.
        </p>
        <p className="text-sm text-gray-600">
          Weitere Informationen finden Sie in der{" "}
          <a
            href="https://www.ionos.de/terms-gtc/terms-privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-700"
          >
            Datenschutzerklärung von IONOS
          </a>
          .
        </p>
      </section>

      {/* 7) Empfänger */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">7. Empfänger</h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies gesetzlich
          erlaubt ist, Sie eingewilligt haben oder es zur Erfüllung eines Vertrags erforderlich ist.
        </p>
      </section>

      {/* 8) Speicherdauer */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">8. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      {/* 9) Rechte */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">9. Ihre Rechte</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen Datenverarbeitung (Art. 21 DSGVO)</li>
          <li>
            Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)
          </li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an{" "}
          <a
            href="mailto:mietservice@digitalsanierung.de"
            className="underline text-green-700"
          >
            mietservice@digitalsanierung.de
          </a>
          .
        </p>
      </section>

      {/* 10) Änderungen */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">10. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an geänderte
          Rechtslagen oder technische Entwicklungen anzupassen.
        </p>
      </section>
    </div>
  );
}
