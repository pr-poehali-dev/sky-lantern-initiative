import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"

import { VenueSection } from "@/components/sections/venue-section"
import { PaletteSection } from "@/components/sections/palette-section"
import { RsvpSection } from "@/components/sections/rsvp-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background relative">
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <VenueSection />
        <PaletteSection />
        <RsvpSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index