import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, Phone } from '@phosphor-icons/react'
import logoVaritec from '@/assets/logo_varitec.jpg'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz' | 'werkstatt' | 'tuv-admin'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  // Menü-Konfiguration für verschiedene Breakpoints
  const mainMenuItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'tuv-termin' as Page, label: 'TÜV-Termin' },
    { id: 'hu-au' as Page, label: 'HU/AU' },
    { id: 'kontakt' as Page, label: 'Kontakt' },
  ]
  const extraMenuItems = [
    { id: 'leistungen' as Page, label: 'Leistungen' },
    { id: 'reifenservice' as Page, label: 'Reifenservice' },
    { id: 'team' as Page, label: 'Team' },
    { id: 'werkstatt' as Page, label: 'Werkstatt' },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [maxVisible, setMaxVisible] = useState(mainMenuItems.length)
  const navRef = useRef<HTMLDivElement>(null)

  // Dynamisch nach Fensterbreite anzeigen
  useEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return
      const navWidth = navRef.current.offsetWidth
      // Schätze, wie viele Buttons reinpassen (ca. 120px pro Button + Logo + Telefon)
      const buttonWidth = 120
      const logoWidth = 60
      const phoneWidth = 120
      const max = Math.max(1, Math.floor((navWidth - logoWidth - phoneWidth) / buttonWidth))
      setMaxVisible(max)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div ref={navRef} className="flex h-16 items-center justify-between">
          {/* Logo bleibt immer sichtbar, auch bei mobile */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-3 focus:outline-none"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <img src={logoVaritec} alt="Varitec Logo" className="h-10 w-auto rounded shadow" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 w-full justify-end">
            {/* Zeige so viele Menüpunkte wie Platz ist */}
            {[...mainMenuItems, ...extraMenuItems].slice(0, maxVisible).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-base font-semibold transition-colors hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  currentPage === item.id
                    ? 'text-accent bg-accent/10 shadow-sm'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="gap-2 ml-2 bg-accent text-white hover:bg-accent/80 shadow"
              onClick={() => window.location.href = 'tel:+4972318002999'}
            >
              <Phone weight="bold" />
              Anrufen
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="focus:outline-none">
                {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-xs p-0 pt-6">
              {/* Logo auch im mobilen Menü immer oben sichtbar */}
              <div className="flex items-center gap-3 mb-4 px-4">
                <img src={logoVaritec} alt="Varitec Logo" className="h-10 w-auto rounded shadow" />
              </div>
              <div className="flex flex-col gap-2 px-4">
                {[...mainMenuItems, ...extraMenuItems].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full text-left text-lg font-semibold rounded-lg px-3 py-3 transition-colors hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      currentPage === item.id ? 'text-accent bg-accent/10' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  className="gap-2 mt-6 w-full bg-accent text-white hover:bg-accent/80 shadow"
                  onClick={() => window.location.href = 'tel:+4972318002999'}
                >
                  <Phone weight="bold" />
                  Jetzt anrufen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
