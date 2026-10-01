import { useParams } from "react-router-dom"
import { services } from "./Services"


function ServiceDetails() {
    const { serviceName } = useParams()

    const service = services.find((service) => {
  return service.name.toLowerCase().replace(" ", "-") === serviceName
})

if (!service) {
  return <h1>Service not found</h1>
}
    return (
  <div>
    <h1>{service.name}</h1>
    <p>{service.description}</p>
  </div>
)
}

export default ServiceDetails