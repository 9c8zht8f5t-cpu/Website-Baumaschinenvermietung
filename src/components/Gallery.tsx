import Image from "next/image";

export default function Gallery({
  images,
  alt,
}: { images: string[]; alt: string }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // jpg/png → webp bevorzugen (wenn der Pfad schon .webp ist, bleibt er unverändert)
  const toWebp = (p: string) => p.replace(/\.(jpe?g|png)$/i, ".webp");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {images.map((src, i) => {
        const displaySrc = toWebp(src);               // für Next/Image (basePath wird automatisch ergänzt)
        const hrefSrc = `${base}${displaySrc}`;       // für den Download/Fullscreen-Link (basePath manuell)

        return (
          <a key={i} href={hrefSrc} target="_blank" rel="noreferrer" className="block">
            <div className="relative aspect-[3/2] rounded overflow-hidden">
              <Image
                src={displaySrc}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                // kein priority -> lazy (schneller)
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
