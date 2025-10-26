import { notFound } from "next/navigation";
import { findeMaschine } from "@/lib/data";
import Gallery from "@/components/Gallery";
import TechTable from "@/components/TechTable";
import { fmtEUR, withMwst } from "@/lib/format";
import type { Maschine } from "@/lib/type";
import { bruttoFrom, firstBild } from "@/lib/type";

type PageProps = { params: { slug: string } };

export default function MaschineDetail({ params }: PageProps) {
  const raw = findeMaschine(params.slug) as Maschine | null;
  if (!raw) return notFound();
  const m = raw as Maschine;

  const mw = m.preise?.mwst ?? 19;

  // Brutto-Preise sicher und typgeprüft ableiten
  const tagBrutto         = bruttoFrom(m.preise?.tag,        mw, withMwst);
  const wochenendeBrutto  = bruttoFrom(m.preise?.wochenende, mw, withMwst);
  const wocheBrutto       = bruttoFrom(m.preise?.woche,      mw, withMwst);

  // Kaution: sowohl unter preise als auch auf Root unterstützen
  const kaution = m.preise?.kaution ?? m.kaution ?? null;

  // Galerie-Quellen absichern
  const bilder = m.bilder?.filter(Boolean) ?? [];
  const hero = firstBild(m);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">{m.name}</h1>

      {bilder.length > 0 ? <Gallery images={bilder} alt={m.name} /> : null}

      <section className="space-y-2">
        <p className="text-lg">
          <strong>
            Preis: {tagBrutto != null ? fmtEUR(tagBrutto) : "Preis auf Anfrage"}
          </strong>{" "}
          / Tag inkl. MwSt.
        </p>
        <ul className="list-disc ml-5 text-slate-700">
          {wochenendeBrutto != null && <li>Wochenende: {fmtEUR(wochenendeBrutto)}</li>}
          {wocheBrutto != null && <li>Woche: {fmtEUR(wocheBrutto)}</li>}
          {kaution != null && <li>Kaution: {fmtEUR(kaution)}</li>}
          {typeof mw === "number" && <li>Alle Preise inkl. {mw}% MwSt.</li>}
        </ul>
      </section>

      {m.technische_daten && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Technische Daten</h2>
          <TechTable data={m.technische_daten} />
        </section>
      )}

      {m.zubehoer?.length ? (
        <section>
          <h2 className="text-xl font-semibold mb-2">Zubehör</h2>
          <ul className="list-disc ml-5">
            {m.zubehoer.map((z, i) => (
              <li key={i}>
                {z.name}
                {z.preis_tag ? ` – ${fmtEUR(z.preis_tag)} / Tag` : ""}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
