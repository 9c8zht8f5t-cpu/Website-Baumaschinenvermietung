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
  preise?: Preise;
  technische_daten?: Record<string, string>;
  zubehoer?: { name: string; preis_tag?: number }[];
  verfuegbar: boolean;
  kurztext?: string;
  kurzbeschreibung?: string;
  beschreibung?: string;
  bild?: string;
};

export const MASCHINEN: Maschine[] = [
  // --- 1) Volvo L20F ---
  {
    slug: "VolvoL20F",
    name: "Volvo L20F",
    kategorie: "Minibagger",
    bilder: ["/img/Mietservice-1.webp", "/img/Mietservice-3.webp", "/img/Mietservice-2.webp"],
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

  // --- 2) Volvo EC18E ---
  {
    slug: "VolvoEC18E",
    name: "Volvo EC18E (1.8 t)",
    kategorie: "Minibagger",
    bilder: ["/img/Mietservice-1-2.webp", "/img/Mietservice-2-2.webp", "/img/Mietservice-3-2.webp"],
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
    bilder: ["/img/Mietservice-8.webp"],
    kurzbeschreibung:
      "Robuster Baumaschinenanhänger mit 2,7 t Gesamtgewicht und Rampe – ideal für den Transport von Minibaggern und Geräten.",
    beschreibung:
      "Der Temared Baumaschinenanhänger Builder 153×260 cm (2,7 t) ist die perfekte Lösung für den sicheren Transport von Minibaggern, Baumaschinen oder Gartengeräten. Seine stabile, feuerverzinkte Stahlrahmenkonstruktion und die rutschfeste Ladefläche bieten hohe Sicherheit und Langlebigkeit im täglichen Einsatz.\n\nTechnische Daten:\n- Zulässiges Gesamtgewicht: 2.700 kg\n- Nutzlast: ca. 2.000 kg\n- Eigengewicht: ca. 700 kg\n- Ladefläche: 153 × 260 cm\n- Integrierte Auffahrrampe\n- Verzinkter Rahmen, Stützrad, Zurrpunkte",
    preise: {
      tag: 30,
      mwst: 19,
      kaution: 150
    },
    verfuegbar: true,
    kurztext:
      "Robuster Baumaschinenanhänger mit 2,7 t Gesamtgewicht und Rampe – ideal für den Transport von Minibaggern und Geräten."
  },

  // --- 4) Wacker Neuson BTS 1035 ---
  {
    name: "Wacker Neuson BTS 1035 Trennschneider",
    slug: "wacker-neuson-bts-1035-l3",
    kategorie: "Trennschneider / Motorflex",
    bilder: ["/img/Trennschneider.webp"],
    preise: {
      tag: 30,
      wochenende: 45,
      kaution: 150,
      mwst: 19
    },
    verfuegbar: true,
    kurztext:
      "Leistungsstarker Wacker Neuson BTS 1035 L3 Trennschneider mit 350 mm Scheibe – ideal für präzise Schnitte in Beton und Asphalt."
  },

  // --- 5) NEU: BOMAG BPR 60/65 ---
  {
    slug: "bomag-bpr-60-65",
    name: "BOMAG BPR 60/65 Büttelplatte",
    kategorie: "Rüttelplatten",
    bilder: ["/img/BomagBPR6065.webp"],
    kurztext:
      "Leistungsstarke reversible Rüttelplatte mit ca. 60 kN Verdichtungskraft – ideal für Pflaster-, Wege- und Erdarbeiten.",
    preise: {
      tag: 65,
      wochenende: 80,
      woche: 270,
      transport_km: 1.2,
      kaution: 400,
      mwst: 19
    },
    technische_daten: {
      "Betriebsgewicht": "ca. 420-460 kg",
      "Zentrifugalkraft": "60 kN",
      "Arbeitsbreite": "550 mm",
      "Vibrationsfrequenz": "ca. 66 Hz",
      "Motorleistung": "6,8 kW (ca. 9,1 PS)",
      "Steuerrohr höhenverstellbar": "Ja",
      "Transportrollen (optional)": "Ja"
    },
    zubehoer: [
      { name: "Verbreiterungsplatte 650 mm", preis_tag: 10 },
      { name: "Transportrollen-Set", preis_tag: 8 }
    ],
    verfuegbar: true
  }
];

export const ALL_SLUGS = MASCHINEN.map(m => m.slug);
