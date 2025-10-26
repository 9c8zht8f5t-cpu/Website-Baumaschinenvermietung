import MaschinenCard from "@/components/MaschinenCard";
import { alleMaschinen } from "@/lib/data";
export const metadata = { title: "Maschinen mieten – Übersicht" };
export default function MaschinenIndex() {
  const maschinen = alleMaschinen();
  const cats = Array.from(new Set(maschinen.map(m=>m.kategorie)));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Unsere Maschinen und Baugeräte</h1>
      <div className="text-sm text-slate-600">Kategorien: {cats.join(" · ")}</div>
      <div className="grid-cards">
        {maschinen.map(m => <MaschinenCard key={m.slug} m={m} />)}
      </div>
    </div>
  );
}
