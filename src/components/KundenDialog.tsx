"use client";
import { useEffect, useState } from "react";

export default function KundenDialog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const kunde = localStorage.getItem("kundentyp");
    if (!kunde) setVisible(true);
  }, []);

  const handleChoice = (typ: "privat" | "gewerblich") => {
    localStorage.setItem("kundentyp", typ);
    setVisible(false);
    window.location.reload(); // Seite neu laden, damit Preise angepasst werden
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Bitte Kundentyp auswählen</h2>
        <p className="mb-6 text-gray-600">Damit wir dir die richtigen Preise anzeigen können:</p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => handleChoice("privat")}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Privatkunde
          </button>
          <button
            onClick={() => handleChoice("gewerblich")}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
          >
            Gewerbekunde
          </button>
        </div>
      </div>
    </div>
  );
}
