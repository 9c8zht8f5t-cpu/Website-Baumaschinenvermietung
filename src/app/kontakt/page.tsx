export const metadata = { title: "Kontakt" };

export default function Kontakt() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 px-4 py-8">
      <h1 className="text-3xl font-semibold text-center md:text-left">Kontakt</h1>

      <p className="text-gray-700">
        Nutzen Sie gern das Formular oder schreiben Sie uns direkt an:
        <a
          className="underline text-green-700 ml-1"
          href="mailto:mietservice@digitalsanierung.de"
        >
          mietservice@digitalsanierung.de
        </a>
      </p>

      <p className="text-gray-700">
        Telefon:{" "}
        <a className="underline text-green-700" href="tel:+4915150713702">
          +49 1515 0713702
        </a>
      </p>

      <p>
        <a
          className="btn inline-block mt-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          href="tel:+4915150713702"
        >
          Jetzt anrufen
        </a>
      </p>

      {/* Kontaktformular */}
      <form className="bg-white border rounded-2xl shadow-sm p-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ihr Name *
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-green-500 focus:ring-1 focus:ring-green-500"
            placeholder="Max Mustermann"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-green-500 focus:ring-1 focus:ring-green-500"
            placeholder="max.mustermann@email.de"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-green-500 focus:ring-1 focus:ring-green-500"
            placeholder="+49 1515 0713702"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            required
            className="w-full rounded-lg border border-gray-300 p-3 text-base focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[140px]"
            placeholder="Ich interessiere mich für..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-lg transition-colors duration-200"
        >
          Anfrage senden
        </button>
      </form>
    </div>
  );
}
