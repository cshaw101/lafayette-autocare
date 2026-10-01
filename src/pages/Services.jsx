import ServiceCard from "../components/ServiceCard"
export const services = [
  {
    name: "Oil Changes",
    description: "Fast and reliable oil changes to keep your engine running smoothly."
  },
  {
    name: "Brake Repair",
    description: "Professional brake inspections, repairs, and replacements."
  },
  {
    name: "Tire Services",
    description: "Tire rotation, balancing, installation, and repair services."
  },
  {
    name: "Engine Diagnostics",
    description: "Accurate diagnostics to identify and resolve engine problems."
  },
  {
    name: "AC & Heating",
    description: "Keep your vehicle comfortable with reliable heating and AC service."
  },
  {
    name: "Vehicle Detailing",
    description: "Professional interior and exterior detailing to keep your vehicle looking its best."
  }
]



function Services() {
  return (
    <div>
      <h1>Our Services</h1>

      {services.map((service) => {
        return (
          <ServiceCard
            key={service.name}
            name={service.name}
            description={service.description}
          />
        )
      })}
    </div>
  )
}



export default Services