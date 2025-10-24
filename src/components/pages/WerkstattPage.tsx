import { useState } from 'react'

// Automatischer Import aller Bilder aus dem werkstatt-Ordner
const images = Object.values(
  import.meta.glob('@/assets/werkstatt/*.{jpg,jpeg,png,gif,webp}', { eager: true, import: 'default' })
).map((src, i) => ({ src: String(src), alt: `Werkstatt Bild ${i + 1}` }))

export default function WerkstattPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const prevImage = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const nextImage = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Unsere Werkstatt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="rounded-lg shadow-md w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            &times;
          </button>
          <div className="relative flex items-center justify-center group">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
            />
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center z-10 opacity-70 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
              aria-label="Vorheriges Bild"
              style={{ left: '2%' }}
            >
              {'<'}
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center z-10 opacity-70 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
              aria-label="Nächstes Bild"
              style={{ right: '2%' }}
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
