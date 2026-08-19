"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const PROJECTS = [
  { src: "/images/gallery-1.jpg", alt: "Custom dark aluminum lattice pergola over patio" },
  { src: "/images/gallery-2.jpg", alt: "White solid-roof patio cover with outdoor dining" },
  { src: "/images/gallery-3.jpg", alt: "Louvered pergola over outdoor kitchen" },
  { src: "/images/gallery-4.jpg", alt: "White lattice patio cover over pool area" },
  { src: "/images/gallery-5.jpg", alt: "Modern solid-roof patio cover at golden hour" },
  { src: "/images/gallery-6.jpg", alt: "Two-tone freestanding patio cover with furniture" },
  { src: "/images/gallery-7.jpg", alt: "Brown lattice pergola with wicker daybed and desert landscaping" },
  { src: "/images/gallery-8.jpg", alt: "Brown lattice sun cover viewed from underneath" },
  { src: "/images/gallery-9.jpg", alt: "Dark lattice sun cover with shadow patterns on turf" },
  { src: "/images/gallery-10.jpg", alt: "Dark gray freestanding lattice pergola on pavers" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/620451229_18097240052494359_9104924487855446228_n-nfZxAUeVvsG8NKZdMwpR4Sp729yVZy.jpg", alt: "White solid patio cover with louvered privacy wall over turf and paver backyard" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/605904172_18094585016494359_2863394204829172646_n-tXN6YANHVURS5oz2Q3EHQ6oGZ3hwE9.jpg", alt: "Dark modern louvered pergola at dusk with white block walls and turf" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/605904169_18094585007494359_5876347638347139777_n-swILUumwPXzCvSTUgIWK9hV37HFeGx.jpg", alt: "Aerial view of backyard with dark louvered pergola, pavers, and turf" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/620409373_18097240079494359_5513927486353361083_n-yTGueA2hxiBw3KoMCPXy2iEXpE9j2l.jpg", alt: "White attached patio cover with louvered wall over large turf yard" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/513489069_18073619204494359_6678559485540980421_n-PZZvJ01cWVpmCABioUD4rvTx0KvGBK.jpg", alt: "Aerial view of backyard with white patio cover, pavers, and string lights" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/605985192_18094584977494359_7429041825270019903_n-XqWQgbIGivmk8oDjZgQamODeikdzP7.jpg", alt: "Dusk view of white pergola with louvered wall and paver walkway" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/651371380_18103184576494359_2087230699680866188_n-9irdhSX7aZGdNWMLj3oetCnPLCj5p6.jpg", alt: "White attached patio cover with paver stepping-stone path through turf" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/607221145_18094584959494359_1782656086283699737_n%28792%29-7qhZCC5b9DvWXcmj47vt4Qe9QNfTMV.jpg", alt: "Dark gray freestanding louvered pergola at dusk with landscape lighting" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/620411470_18097240007494359_4464836072478560666_n%28997%29-6iokNZn8uNl0J1lVNyDzIbRpNvZCDq.jpg", alt: "Symmetrical view of white patio cover with paver stepping-stone path" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/608228298_18094584974494359_6638459488127035030_n-q6QX3ojCNCQQ8UsGh9oi2dxHyRnMyb.jpg", alt: "Dusk view of dark pergola with curving stepping-stone path through turf" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/513492822_18073619216494359_3862028397811590176_n-uBbtlMdvG2YSQC0cGRG0yPKpYMs2GL.jpg", alt: "Bronze solid patio cover with louvered wall over paver patio" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/604827609_18094585025494359_2108981316619141228_n-3DFOOQtFL4OixHX3k2cIMYYJd9W4CV.jpg", alt: "Evening view from under black louvered pergola facing stucco home" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/653642653_18103184567494359_1761500582800218594_n%28698%29-q8uw9pC9wIbSiDyO8xItVsFPO1TQTZ.jpg", alt: "White patio cover with desert gravel landscaping and turf under blue sky" },
]

const poppinsStyle = { fontFamily: "var(--font-poppins), Poppins, sans-serif" }

export function GallerySection() {
  const [current, setCurrent] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROJECTS.length)
    }, 10000)
  }, [])

  useEffect(() => {
    if (lightboxIndex !== null) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [lightboxIndex, startTimer])

  const goToSlide = (index: number) => {
    setCurrent(index)
    startTimer()
  }

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ""
  }, [])

  const lightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % PROJECTS.length : null))
  }, [])

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + PROJECTS.length) % PROJECTS.length : null))
  }, [])

  return (
    <section className="bg-background py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
            See Our Stunning Results
          </p>
          <h2
            className="text-3xl font-bold text-foreground sm:text-4xl text-balance"
            style={poppinsStyle}
          >
            Explore Our Recent Patio Projects
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div
            onClick={() => openLightbox(current)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(current) } }}
            role="button"
            tabIndex={0}
            className="group relative isolate w-full overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
            aria-label={`View ${PROJECTS[current].alt}`}
          >
            {PROJECTS.map((project, i) => (
              <Image
                key={project.src}
                src={project.src}
                alt={project.alt}
                width={896}
                height={560}
                className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                  i === current ? "relative opacity-100" : "absolute inset-0 opacity-0"
                }`}
                sizes="(max-width: 896px) 100vw, 896px"
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 pointer-events-none" />
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-amber-600" : "w-2 bg-foreground/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="size-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PROJECTS[lightboxIndex].src}
              alt={PROJECTS[lightboxIndex].alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext() }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </section>
  )
}
