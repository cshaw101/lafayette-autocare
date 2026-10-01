import ServiceCard from "../components/ServiceCard"
import { services } from "../data/services"
import { Box, Typography } from "@mui/material"
import { SimpleGrid } from "@mantine/core"


function Services() {
  return (
    <div>
    <Box sx={{ py: 6 }}>
  <Typography
    variant="h2"
    component="h1"
    sx={{ textAlign: "center", mb: 2 }}
  >
    Our Services
  </Typography>

  <Typography
    variant="body1"
    sx={{ textAlign: "center", mb: 5 }}
  >
    From routine maintenance to complex repairs, Lafayette AutoCare
    is here to keep your vehicle running reliably.
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
</Box>
    </div>
  )
}



export default Services