import { useParams, useNavigate } from "react-router-dom"
import { services } from "../data/services"
import { Box, Typography } from "@mui/material"
import { Card } from "@mantine/core"
import Button from "../components/Button"

function ServiceDetails() {
  const { serviceName } = useParams()
  const navigate = useNavigate()

  const service = services.find((service) => {
    return service.name.toLowerCase().replace(" ", "-") === serviceName
  })

  if (!service) {
    return <h1>Service not found</h1>
  }

  return (
  <Box
  sx={{
    py: 6,
    maxWidth: "800px",
    mx: "auto",
  }}
>
      <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mb: 3 }}
      >
        {service.name}
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4 }}
      >
        {service.description}
      </Typography>

      <Button type='submit' onClick={() => navigate("/contact")}>
        Request This Service
     </Button>
      </Card>
    </Box>
  )
}

export default ServiceDetails