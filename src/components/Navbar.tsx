import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, Phone } from '@phosphor-icons/react'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'leistungen' as Page, label: 'Leistungen' },
    { id: 'tuv-termin' as Page, label: 'TÜV-Termin' },
    { id: 'reifenservice' as Page, label: 'Reifenservice' },
    { id: 'hu-au' as Page, label: 'HU/AU' },
    { id: 'team' as Page, label: 'Team' },
    { id: 'kontakt' as Page, label: 'Kontakt' },
  ]

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            Varitec
          </button>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  currentPage === item.id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="gap-2"
              onClick={() => window.location.href = 'tel:+49123456789'}
            >
              <Phone weight="bold" />
              Anrufen
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-left text-lg font-semibold transition-colors hover:text-accent py-2 ${
                      currentPage === item.id ? 'text-accent' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  className="gap-2 mt-4"
                  onClick={() => window.location.href = 'tel:+49123456789'}
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
