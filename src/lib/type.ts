// Preis kann Zahl (Netto/Tag) ODER Objekt sein
export type PreisValue = number | { netto: number; brutto?: number };

export interface Preise {
  mwst?: number;
  tag?: PreisValue;
  wochenende?: PreisValue;
  woche?: PreisValue;
  kaution?: number;
  transport_km?: number;
}

export interface ZubehoerItem { name: string; preis_tag?: number; }

export interface Maschine {
  name: string;
  slug: string;
  preise?: Preise;
  kaution?: number; // Fallback: manche Datensätze haben es auf Root
  bilder?: string[];
  technische_daten?: Record<string, string>;
  zubehoer?: ZubehoerItem[];
}

// Type Guards + Normalizer
export const isPreisObj = (p: unknown): p is { netto: number; brutto?: number } =>
  typeof p === "object" && p !== null && "netto" in (p as any);

export function bruttoFrom(p: PreisValue | undefined, mwst: number, withMwst: (netto: number, mw: number) => number): number | null {
  if (p == null) return null;
  if (typeof p === "number") return withMwst(p, mwst);
  const b = (p as any).brutto as number | undefined;
  return (typeof b === "number") ? b : withMwst(p.netto, mwst);
}

export function firstBild(m: Maschine): string | null {
  return m.bilder?.find(Boolean) ?? null;
}
