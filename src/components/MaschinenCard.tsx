"use client";
import Link from "next/link";
import type { Maschine } from "@/lib/data";
import { fmtEUR, withMwst } from "@/lib/format";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MaschinenCard({ m }: { m: Maschine }) {
  // Zustand für Kundentyp (default privat)
  const [kundentyp, setKundentyp] = useState<"privat" | "gewerblich">("privat");

  // Beim Mount aus localStorage lesen + auf Änderungen (storage event) reagieren
  useEffect(() => {
    const saved = localStorage.getItem("kundentyp");
    if (saved === "privat" || saved === "gewerblich") setKundentyp(saved);

    const onStorage = (e: StorageEvent) => {
      if (e.key === "kundentyp") {
        const v = (e.newValue as "privat" | "gewerblich") || "privat";
        setKundentyp(v);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const mw = m.preise.mwst ?? 19;
  const netto = m.preise.tag;
  const preis = kundentyp === "gewerblich" ? netto : withMwst(netto, mw);
  const hinweis = kundentyp === "gewerblich" ? "zzgl. MwSt." : "inkl. MwSt.";

  return (
    <article className="card">
      <img src={m.bilder?.[0]} alt={m.name} loading="lazy" />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{m.name}</h3>
        <p className="text-sm text-slate-600">{m.kurztext}</p>
        <p className="font-medium">ab {fmtEUR(preis)} / Tag {hinweis}</p>
        <Link href={`/maschinen/${m.slug}`} className="btn">Details</Link>
      </div>
    </article>
  );
  
}
