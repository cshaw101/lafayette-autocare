import ServiceCard from "../components/ServiceCard"
import { services } from "../data/services"


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