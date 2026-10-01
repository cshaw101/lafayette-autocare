    import { useNavigate } from "react-router-dom"
    import ServiceCard from "../components/ServiceCard";
   import { services } from "../data/services";
    import SectionTitle from "../components/SectionTitle";
    import Button from "../components/Button";
    import { SimpleGrid, Stack } from "@mantine/core"

    function Home() {
        const navigate = useNavigate();
    return (
        <Stack>

        <SectionTitle title="Why Choose Lafayette AutoCare?" />
        <p>this is a description of the shop. pretend you are very 
            interested in this description
        </p>
        <Button onClick={() => {
            navigate('/contact')
        }}>Contact Us!</Button>

    <h2>Our Services</h2>
 <SimpleGrid cols={2}>

  {services.map((service) => {
    return (
      <ServiceCard 
        key={service.name}
        name={service.name}
        description={service.description}
      />
    )
  })}

</SimpleGrid>

    <section>
   <SectionTitle title="Why Customers Choose Us" />
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
        <Button onClick={() => {
            navigate('/contact')
        }}>Contact Us!</Button>
    </section>
    </Stack>
    )
    }

    export default Home