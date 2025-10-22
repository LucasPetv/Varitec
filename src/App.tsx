import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/components/pages/HomePage'
import LeistungenPage from '@/components/pages/LeistungenPage'
import TUVTerminPage from '@/components/pages/TUVTerminPage'
import TeamPage from '@/components/pages/TeamPage'
import KontaktPage from '@/components/pages/KontaktPage'
import ReifenservicePage from '@/components/pages/ReifenservicePage'
import HUAUPage from '@/components/pages/HUAUPage'
import ImpressumPage from '@/components/pages/ImpressumPage'
import DatenschutzPage from '@/components/pages/DatenschutzPage'

type Page = 'home' | 'leistungen' | 'tuv-termin' | 'team' | 'kontakt' | 'reifenservice' | 'hu-au' | 'impressum' | 'datenschutz'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'leistungen':
        return <LeistungenPage onNavigate={setCurrentPage} />
      case 'tuv-termin':
        return <TUVTerminPage />
      case 'team':
        return <TeamPage />
      case 'kontakt':
        return <KontaktPage />
      case 'reifenservice':
        return <ReifenservicePage onNavigate={setCurrentPage} />
      case 'hu-au':
        return <HUAUPage onNavigate={setCurrentPage} />
      case 'impressum':
        return <ImpressumPage />
      case 'datenschutz':
        return <DatenschutzPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  )
}

export default App
