export interface Service {
  id: string
  title: string
  description: string
  icon: string
  benefit: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  image?: string
}

export interface TUVAppointment {
  id: string
  date: string
  time: string
  vehicleType: string
  customerName: string
  email: string
  phone?: string
  licensePlate: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  timestamp: string
}

export interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}
