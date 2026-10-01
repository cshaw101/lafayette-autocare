import { Link } from "react-router-dom"

function ServiceCard({ name, description }) {
    

return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/services/${name.toLowerCase().replace(" ", "-")}`}>View Service</Link>
    </div>
)

}

export default ServiceCard