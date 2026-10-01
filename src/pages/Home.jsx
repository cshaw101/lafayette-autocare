import { useNavigate } from "react-router-dom"
import ServiceCard from "../components/ServiceCard";
import { services } from "./Services";

function Home() {
    const navigate = useNavigate();
  return (
<div>

    <h1>Lafayette Autocare</h1>
    <p>this is a description of the shop. pretend you are very 
        interested in this description
    </p>
    <button onClick={() => {
    navigate('/contact')
}}>
    Contact Us!
</button>

<h2>Our Services</h2>
{services.map((service) => {
    return (
       <ServiceCard key={service.name} name={service.name} description={service.description} />
    )
})}


<section>
    <h2>Why Choose Lafayette AutoCare?</h2>
    <div>
        <h3>
            honest pricing
        </h3>
        <p>
            Dicta veniam molestiae tempore provident voluptas laudantium 
            eveniet ipsa blanditiis ea adipisci. Dicta veniam molestiae tempore provident voluptas laudantium 
            eveniet ipsa blanditiis ea adipisci.
        </p>
    </div>
    <div>
        <h3>
            experienced technicians
        </h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Totam rerum sapiente error suscipit maiores in repellat necessitatibus 
            tempore. Dicta veniam molestiae tempore provident voluptas laudantium 
            eveniet ipsa blanditiis ea adipisci.
        </p>
    </div>
    <div>
        <h3>
            convenient service
        </h3>
        <p>
            Dicta veniam molestiae tempore provident voluptas laudantium 
            eveniet ipsa blanditiis ea adipisci.Dicta veniam molestiae tempore provident voluptas laudantium 
            eveniet ipsa blanditiis ea adipisci.
        </p>
    </div>
</section>

<section>
    <h2>Ready to get your car back on the road?</h2>
    <p>Whether you need routine maintenance or a major repair, our team is ready to help get you back on the road."</p>
    <button onClick={() => {
        navigate('/contact')
    }}>Request Service</button>
</section>

</div>
  )
}

export default Home