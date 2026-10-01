    import { useNavigate } from "react-router-dom"
    import ServiceCard from "../components/ServiceCard";
   import { services } from "../data/services";
    import SectionTitle from "../components/SectionTitle";
    import Button from "../components/Button";
    import { SimpleGrid, Stack } from "@mantine/core"
    import Hero from "../components/Hero";
    import { Box, Typography } from "@mui/material"
    import FeatureCard from "../components/FeatureCard"


    function Home() {
        const navigate = useNavigate();
    return (
        <Stack>

        <Hero />

    <Typography 
  variant="h3"
  component="h2"
  sx={{ textAlign: "center", mb: 4 }}
>
  Our Services
</Typography>
 <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>

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
   <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
    },
    gap: 3,
  }}
>
        <FeatureCard
  title="Honest Pricing"
  description="We believe in straightforward recommendations and transparent communication. We'll explain what your vehicle needs before any work begins."
/>
       <FeatureCard
  title="Experienced Technicians"
  description="Our technicians bring experience and attention to detail to every vehicle, from routine maintenance to complex repairs."
/>
       <FeatureCard
  title="Convenient Service"
  description="We're proud to serve the Lafayette community with dependable service and an experience built around our customers."
/>
</Box>
    </section>

   <Box
  sx={{
    textAlign: "center",
    py: 8,
    px: 3,
    mt: 8,
    backgroundColor: "#f5f5f5",
  }}
>
  <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
    Ready to Get Your Vehicle Taken Care Of?
  </Typography>

  <Typography variant="body1" sx={{ mb: 4 }}>
    Contact Lafayette AutoCare today to schedule your service.
  </Typography>

  <Button onClick={() => navigate("/contact")}>
    Schedule Service
  </Button>
</Box>
    </Stack>
    )
    }

    export default Home