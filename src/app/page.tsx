import Link from "next/link";
import MaschinenCard from "@/components/MaschinenCard";
import { alleMaschinen } from "@/lib/data";
import { SITE } from "@/lib/seo";
import ImageSlider from "@/components/SliderFront";
const featuredSlugs = [
  "VolvoEC18E",         
  "VolvoL20F",          
  "wacker-neuson-bts-1035-l3"  ,
  "temared-baumaschinenanhaenger"

];
  const maschinen = alleMaschinen();
  const beliebte = featuredSlugs
  .map(slug => maschinen.find(m => m.slug === slug))
  .filter((m): m is typeof maschinen[number] => Boolean(m));


export default function Home() {
  return (
    <div className="space-y-12">
      <ImageSlider />

      <section className="text-center space-y-4 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
          Mieten Sie leistungsstarke Baumaschinen für jedes Projekt – vom kompakten Minibagger bis zum kraftvollen Radlader. Unsere modernen Geräte sind sofort einsatzbereit und perfekt gewartet. Schnell, flexibel und zuverlässig – bei uns finden Sie genau die Maschine, die Ihre Baustelle voranbringt.
        </h1>

        <div className="flex gap-3 justify-center">
          <Link href="/maschinen" className="btn">Zur Maschinenübersicht</Link>
         <Link href="/kontakt" className="btn">Jetzt anrufen</Link>
        </div>
      </section>

      <section>
          <h2 className="text-2xl font-semibold mb-4">Beliebte Maschinen</h2>
          <div className="grid-cards">
          {beliebte.map(m => <MaschinenCard key={m.slug} m={m} />)}
        </div>
      </section>
    </div>
  );
}
