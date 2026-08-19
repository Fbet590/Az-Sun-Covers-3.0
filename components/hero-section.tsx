"use client"

import Image from "next/image"
import { ShieldCheck, Handshake, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col overflow-hidden pb-24 sm:pb-8">
      <Image
        src="/images/hero-patio.jpg"
        alt="Custom patio cover in Arizona backyard"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1207]/85 via-[#1a1207]/60 to-transparent" />

      {/* Top-left logo text */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 sm:pt-8 sm:px-6 lg:px-8">
        <p className="text-base font-bold uppercase tracking-widest text-white sm:text-lg">
          TOP Tier SUN COVERS
        </p>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 py-6 sm:px-6 sm:py-0 lg:px-8 -mt-4 sm:-mt-8">
        <div className="max-w-2xl">
          {/* Main headline at top */}
          <h1 className="text-[60px] font-semibold leading-tight text-white sm:text-[80px]" style={{ fontFamily: '"Oswald", sans-serif' }}>
            Cantilever Package.
          </h1>
        </div>
        
        {/* Spacer to show background image */}
        <div className="flex-1 min-h-[80px] sm:min-h-[120px]" />
        
        {/* Price, subheadline, and button grouped together at bottom */}
        <div className="max-w-2xl">
          <p className="mb-2 sm:mb-3 text-[60px] font-semibold leading-tight text-white sm:text-[80px]" style={{ fontFamily: '"Oswald", sans-serif' }}>
            $8,300 Flat.
          </p>
          <p className="mb-4 sm:mb-6 text-[33px] sm:text-[38px] lg:text-[42px] font-bold leading-tight text-white/90" style={{ fontFamily: '"Oswald", sans-serif' }}>
            Custom Patio Covers <span className="underline decoration-amber-500 underline-offset-4">Designed</span> to Impress.
          </p>
          <Button
            onClick={onGetQuote}
            size="lg"
            className="h-12 rounded-lg bg-amber-600 px-8 text-base font-semibold text-white hover:bg-amber-700 sm:h-14 sm:px-10 sm:text-lg"
          >
            GET OUR CANTILEVER PACKAGE
          </Button>
        </div>
      </div>

      {/* Licensed | Bonded | Insured badges - bottom of hero, full width */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-4 sm:pb-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly">
          <div className="flex items-center gap-2 rounded bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <ShieldCheck className="size-5 shrink-0 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-white">Licensed</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <Handshake className="size-5 shrink-0 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-white">Bonded</span>
          </div>
          <div className="flex items-center gap-2 rounded bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <FileCheck className="size-5 shrink-0 text-amber-400" />
            <span className="text-sm font-semibold uppercase tracking-wide text-white">Insured</span>
          </div>
        </div>
        <p className="mt-2 text-center text-[13px] uppercase tracking-wider text-white/50">R.O.C. 355730</p>
      </div>
    </section>
  )
}
