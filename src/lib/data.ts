import fs from "fs";
import path from "path";

export type Maschine = {
  slug: string;
  name: string;
  kategorie: string;
  bilder?: string[];
  preise: { tag: number; wochenende?: number; woche?: number; transport_km?: number; kaution?: number; mwst?: number; };
  technische_daten?: Record<string, string>;
  zubehoer?: { name: string; preis_tag?: number }[];
  verfuegbar?: boolean;
  kurztext?: string;
};

const dataDir = path.join(process.cwd(), "data", "maschinen");

export function alleMaschinen(): Maschine[] {
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".json"));
  return files
    .map((f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf-8")) as Maschine)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function findeMaschine(slug: string): Maschine | null {
  try {
    const raw = fs.readFileSync(path.join(dataDir, slug + ".json"), "utf-8");
    return JSON.parse(raw) as Maschine;
  } catch {
    return null;
  }
}
