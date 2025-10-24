import { useState } from 'react'
import { addDays, eachDayOfInterval, format, isWithinInterval, parseISO } from 'date-fns'

const ADMIN_PASSWORD = 'varitec2025'

function getBlockedDates(): string[] {
  try {
    return JSON.parse(localStorage.getItem('tuv-blocked-dates') || '[]')
  } catch {
    return []
  }
}
function setBlockedDates(dates: string[]) {
  localStorage.setItem('tuv-blocked-dates', JSON.stringify(dates))
}

function getMonthDays(year: number, month: number) {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  return eachDayOfInterval({ start: first, end: last })
}

export default function TUVAdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [blocked, setBlocked] = useState<string[]>(getBlockedDates())
  const [error, setError] = useState('')
  const [range, setRange] = useState<{ start: string, end: string } | null>(null)
  const today = new Date()
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear] = useState(today.getFullYear())

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true)
      setError('')
    } else {
      setError('Falsches Passwort!')
    }
  }

  const handleDayClick = (date: Date) => {
    const iso = format(date, 'yyyy-MM-dd')
    if (!range) {
      setRange({ start: iso, end: iso })
    } else if (range && range.start && !range.end) {
      setRange({ start: range.start, end: iso })
    } else {
      setRange({ start: iso, end: iso })
    }
  }

  const handleBlockRange = () => {
    if (!range) return
    const start = parseISO(range.start)
    const end = parseISO(range.end)
    const days = eachDayOfInterval({ start, end })
    const newBlocked = Array.from(new Set([...blocked, ...days.map(d => format(d, 'yyyy-MM-dd'))]))
    setBlocked(newBlocked)
    setBlockedDates(newBlocked)
    setRange(null)
  }

  const handleUnblock = (date: string) => {
    const updated = blocked.filter((d) => d !== date)
    setBlocked(updated)
    setBlockedDates(updated)
  }

  const isBlocked = (date: Date) => blocked.includes(format(date, 'yyyy-MM-dd'))
  const isInRange = (date: Date) => {
    if (!range) return false
    const d = format(date, 'yyyy-MM-dd')
    if (range.start && !range.end) return d === range.start
    if (range.start && range.end) {
      const start = parseISO(range.start)
      const end = parseISO(range.end)
      return isWithinInterval(date, { start, end })
    }
    return false
  }

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <form onSubmit={handleLogin} className="bg-card p-8 rounded shadow w-full max-w-xs flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">Admin-Login</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Passwort"
            className="border rounded px-3 py-2"
            autoFocus
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button type="submit" className="bg-accent text-white rounded py-2 font-semibold">Login</button>
        </form>
      </div>
    )
  }

  const days = getMonthDays(viewYear, viewMonth)
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">TÜV-Termin: Tage blockieren</h1>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => {
            if (viewMonth === 0) {
              setViewMonth(11)
              setViewYear(viewYear - 1)
            } else {
              setViewMonth(viewMonth - 1)
            }
          }}
          className="px-2 py-1 rounded bg-muted"
        >&lt;</button>
        <span className="font-semibold text-lg">{today.toLocaleString('de-DE', { month: 'long' })} {viewYear}</span>
        <button
          onClick={() => {
            if (viewMonth === 11) {
              setViewMonth(0)
              setViewYear(viewYear + 1)
            } else {
              setViewMonth(viewMonth + 1)
            }
          }}
          className="px-2 py-1 rounded bg-muted"
        >&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map(wd => <div key={wd} className="text-center font-semibold text-xs text-muted-foreground">{wd}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 mb-6">
        {Array(days[0].getDay() === 0 ? 6 : days[0].getDay() - 1).fill(null).map((_, i) => <div key={i} />)}
        {days.map((date) => {
          const iso = format(date, 'yyyy-MM-dd')
          return (
            <button
              key={iso}
              onClick={() => handleDayClick(date)}
              className={`aspect-square w-10 rounded text-sm font-medium border
                ${isBlocked(date) ? 'bg-red-400 text-white border-red-600' : isInRange(date) ? 'bg-accent/70 text-white border-accent' : 'bg-white hover:bg-accent/10'}
              `}
              disabled={isBlocked(date)}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
      <div className="flex gap-2 mb-6">
        <button
          onClick={handleBlockRange}
          className="bg-accent text-white rounded px-4 py-2 font-semibold disabled:opacity-50"
          disabled={!range || !range.start || !range.end}
        >
          Bereich blockieren
        </button>
        <button
          onClick={() => setRange(null)}
          className="bg-muted rounded px-4 py-2 font-semibold"
        >
          Auswahl zurücksetzen
        </button>
      </div>
      <div>
        <h2 className="font-semibold mb-2">Blockierte Tage:</h2>
        {blocked.length === 0 && <div className="text-muted-foreground">Keine Tage blockiert.</div>}
        <ul className="space-y-2">
          {blocked.map(date => (
            <li key={date} className="flex items-center gap-3">
              <span className="font-mono">{date}</span>
              <button
                onClick={() => handleUnblock(date)}
                className="text-xs bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700"
              >
                Freigeben
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
