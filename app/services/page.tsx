import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceCard } from "@/components/services/service-card"
import { Camera, Building2, Wifi, Hammer, Wrench, Network } from "lucide-react"

const services = [
  {
    title: "Residential CCTV",
    description: "Comprehensive home security solutions with advanced CCTV systems tailored for residential properties.",
    icon: Camera,
    href: "/services/residential"
  },
  {
    title: "Commercial CCTV",
    description: "Professional surveillance systems designed for businesses, retail stores, and commercial properties.",
    icon: Building2,
    href: "/services/commercial"
  },
  {
    title: "IP Cameras",
    description: "High-definition IP camera systems with remote viewing capabilities and advanced features.",
    icon: Network,
    href: "/services/ip-cameras"
  },
  {
    title: "Wireless CCTV",
    description: "Flexible wireless security solutions for properties where traditional wiring is challenging.",
    icon: Wifi,
    href: "/services/wireless"
  },
  {
    title: "Maintenance & Repair",
    description: "Professional maintenance and repair services to keep your CCTV system running optimally.",
    icon: Hammer,
    href: "/services/maintenance"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Our CCTV Installation Services
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Professional CCTV installation services tailored to your security needs
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
