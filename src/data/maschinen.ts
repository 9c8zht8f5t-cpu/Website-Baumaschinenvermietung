// src/data/maschinen.ts

export type Preise = {
  tag?: number;
  wochenende?: number;
  woche?: number;
  transport_km?: number;
  kaution?: number;
  mwst?: number;
};

export type Maschine = {
  slug: string;
  name: string;
  kategorie: string;
  bilder: string[];
  // optionale Felder, damit auch Anhänger/Tools passen
  preise?: Preise;
  technische_daten?: Record<string, string>;
  zubehoer?: { name: string; preis_tag?: number }[];
  verfuegbar: boolean;
  kurztext?: string;
  kurzbeschreibung?: string;   // für den Anhänger-Text
  beschreibung?: string;       // für lange Beschreibungen (z. B. Trennschneider)
  bild?: string;               // optionales Einzelbild-Feld
};

export const MASCHINEN: Maschine[] = [
  // --- 1) Volvo L20F (aus deinem ersten Datensatz) ---
  {
    slug: "VolvoL20F",
    name: "Volvo L20F",
    kategorie: "Minibagger",
    bilder: ["/img/Mietservice-1.jpg", "/img/Mietservice-3.jpg", "/img/Mietservice-2.jpg"],
    preise: {
      tag: 165,
      wochenende: 250,
      woche: 750,
      transport_km: 1.2,
      kaution: 850,
      mwst: 19
    },
    technische_daten: {
      "Betriebsgewicht": "1.810 kg (Kabine), 1.726 kg (Canopy)",
      "Breite Unterwagen": "995–1.352 mm (variabel)",
      "Transportlänge": "3.550 mm",
      "Höhe (Transport)": "< 2,35 m",
      "Grabtiefe": "2.234–2.434 mm (je nach Arm)",
      "Reichweite am Boden": "3.800–3.993 mm",
      "Löffelinhalt": "0,01–0,05 m³",
      "Motor": "Volvo D0.9A (Diesel)",
      "Motorleistung": "12 kW (brutto) / 11,8 kW (netto) bei 2.300 U/min",
      "Fahrgeschwindigkeit": "2,5 / 4,6 km/h",
      "Schwenkgeschwindigkeit": "9,5 U/min",
      "Losbrechkraft (Schaufel)": "12,9 kN",
      "Reißkraft (Stiel)": "8,0 kN"
    },
    zubehoer: [
      { name: "Palettengabel" },
      { name: "Erdschaufel" },
      { name: "hydraulischer Schnellwechsler" }
    ],
    verfuegbar: true,
    kurztext:
      "Kompakter Minibagger mit variablem Unterwagen (995–1.352 mm) und unter 2,35 m Transporthöhe – ideal für enge Einfahrten."
  },

  // --- 2) Volvo EC18E (dein neuer Bagger) ---
  {
    slug: "VolvoEC18E",
    name: "Volvo EC18E (1.8 t)",
    kategorie: "Minibagger",
    bilder: ["/img/Mietservice-1-2.jpg", "/img/Mietservice-2-2.jpg", "/img/Mietservice-3-2.jpg"],
    preise: {
      tag: 120,
      wochenende: 160,
      woche: 500,
      transport_km: 1.2,
      kaution: 500,
      mwst: 19
    },
    technische_daten: {
      "Betriebsgewicht": "1.810 kg (Kabine), 1.726 kg (Canopy)",
      "Breite Unterwagen": "995–1.352 mm (variabel)",
      "Transportlänge": "3.550 mm",
      "Höhe (Transport)": "< 2,35 m",
      "Grabtiefe": "2.234–2.434 mm (je nach Arm)",
      "Reichweite am Boden": "3.800–3.993 mm",
      "Löffelinhalt": "0,01–0,05 m³",
      "Motor": "Volvo D0.9A (Diesel)",
      "Motorleistung": "12 kW (brutto) / 11,8 kW (netto) bei 2.300 U/min",
      "Fahrgeschwindigkeit": "2,5 / 4,6 km/h",
      "Schwenkgeschwindigkeit": "9,5 U/min",
      "Losbrechkraft (Schaufel)": "12,9 kN",
      "Reißkraft (Stiel)": "8,0 kN"
    },
    zubehoer: [
      { name: "Schaufel 30 cm" },
      { name: "Schaufel 45 cm" },
      { name: "Schaufel 85 cm" },
      { name: "Steinsetzzange", preis_tag: 25 }
    ],
    verfuegbar: true,
    kurztext:
      "Kompakter Minibagger mit variablem Unterwagen (995–1.352 mm) und unter 2,35 m Transporthöhe – ideal für enge Einfahrten."
  },

  // --- 3) Temared Baumaschinenanhänger ---
  {
    name: "Temared Baumaschinenanhänger Builder 153x260cm 2,7t",
    slug: "temared-baumaschinenanhaenger",
    kategorie: "Transportanhänger",
    bilder: ["/img/Mietservice-8.jpg"],
    kurzbeschreibung:
      "Robuster Baumaschinenanhänger mit 2,7 t Gesamtgewicht und Rampe – ideal für den Transport von Minibaggern und Geräten.",
    beschreibung:
      "Der Temared Baumaschinenanhänger Builder 153×260 cm (2,7 t) ist die perfekte Lösung für den sicheren Transport von Minibaggern, Baumaschinen oder Gartengeräten. Seine stabile, feuerverzinkte Stahlrahmenkonstruktion und die rutschfeste Ladefläche bieten hohe Sicherheit und Langlebigkeit im täglichen Einsatz.\n\nTechnische Daten:\n- Zulässiges Gesamtgewicht: 2.700 kg\n- Nutzlast: ca. 2.000 kg\n- Eigengewicht: ca. 700 kg\n- Ladefläche: 153 × 260 cm\n- Integrierte Auffahrrampe\n- Verzinkter Rahmen, Stützrad, Zurrpunkte\n\nVorteile:\n- Einfache Handhabung und hohe Stabilität\n- Ideal für Baumaschinen, Kleintraktoren und Geräte\n- Komfortables Be- und Entladen durch stabile Rampe\n\nMietpreis:\n- 30 € netto / 35,70 € brutto pro Tag\n\nTelefonnummer: 0151/50713702",
    preise: {
      tag: 30,
      mwst: 19,
      kaution: 150
    },
    verfuegbar: true,
    kurztext:
      "Robuster Baumaschinenanhänger mit 2,7 t Gesamtgewicht und Rampe – ideal für den Transport von Minibaggern und Geräten."
  },

  // --- 4) Wacker Neuson BTS 1035 Trennschneider ---
  {
    name: "Wacker Neuson BTS 1035 Trennschneider",
    slug: "wacker-neuson-bts-1035-l3",
    kategorie: "Trennschneider / Motorflex",
    bilder: ["/img/logo.png"],
    beschreibung:
      "Wir bieten hier unseren Wacker Neuson BTS 1035 L3 Trennschneider / Motorflex mit einem Scheibendurchmesser von 350 mm zur Miete an.\n\nTechnische Daten:\n- Scheibendurchmesser: 350 mm\n- Max. Schnitttiefe: 12 cm\n- Leistung: 4,2 kW (5,7 PS)\n- Betriebsgewicht: 11,3 kg\n- Zum Nassschneiden geeignet mit Wasseranschluss\n\nIm Mietpreis enthalten:\n- Wacker Neuson BTS 1035 L3\n- Kraftstoff (fertig gemischt)\n- Standard-Einweisung\n- Abnutzung der Diamantscheiben wird gesondert berechnet: 20 €/mm Abnutzung\n\nMietpreise:\n- 1–5 Tage: 30 € pro Tag netto / 35,70 € brutto\n- Wochenendpreis: 45 € netto / 53,55 € brutto (Fr. ab 18:00 Uhr bis So. oder Mo. nach Vereinbarung)\n- Langzeitmiete auf Anfrage (nur Werktage, Mo–Fr)\n\nKaution:\nBei Abholung ist eine Kaution von 150 € in bar zu hinterlegen. Diese wird nach Mietende zurückerstattet.\n\nTelefonnummer: 0151/50713702",
    preise: {
      tag: 30,
      wochenende: 45,
      kaution: 150,
      mwst: 19
    },
    verfuegbar: true,
    kurztext:
      "Leistungsstarker Wacker Neuson BTS 1035 L3 Trennschneider mit 350 mm Scheibe – ideal für präzise Schnitte in Beton und Asphalt."
  }
];

// Hilfsfunktion (optional): Alle Slugs als Array
export const ALL_SLUGS = MASCHINEN.map(m => m.slug);
