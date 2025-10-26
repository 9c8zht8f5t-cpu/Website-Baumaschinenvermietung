export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((src, i)=>(
        <a key={i} href={src} target="_blank" rel="noreferrer">
          <img src={src} alt={alt + ' ' + (i+1)} className="w-full h-40 object-cover rounded" loading="lazy" />
        </a>
      ))}
    </div>
  )
}
