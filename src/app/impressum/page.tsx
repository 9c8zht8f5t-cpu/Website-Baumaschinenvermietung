export const metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-gray-800">
      <h1 className="text-3xl font-semibold mb-4">Impressum</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
        <p>
          Mietservice Digitalsanierung<br />
          Inhaber: Jacob Sittkus<br />
          Bochower Dorfstraße 65<br />
          14550 Groß Kreutz<br />
          Deutschland
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915150713702" className="underline text-green-700">+49 1515 0713702</a><br />
          E-Mail: <a href="mailto:mietservice@digitalsanierung.de" className="underline text-green-700">mietservice@digitalsanierung.de</a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Rechtsform</h2>
        <p>Einzelunternehmen</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Umsatzsteuer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer: DE328125650
          Es erfolgt ein Ausweis der Umsatzsteuer gemäß § 14 UStG.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Jacob Sittkus<br />
          Bochower Dorfstraße 65<br />
          14550 Groß Kreutz
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  );
}
