import { Box, Typography } from "@mui/material"
import { Card } from "@mantine/core"

function About() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mb: 3 }}
      >
        About Lafayette AutoCare
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 6,
          maxWidth: "800px",
        }}
      >
        At Lafayette AutoCare, we believe getting your vehicle serviced
        should be simple, honest, and stress-free. Our team provides reliable
        automotive repair and maintenance services to drivers throughout
        Lafayette and the surrounding community. Whether you need routine
        maintenance, brake repairs, diagnostics, or more extensive service,
        we take the time to understand the problem and explain your options
        clearly. Our goal is to help you make informed decisions about your
        vehicle without unnecessary repairs or confusing recommendations.
      </Typography>

      <Typography
        variant="h3"
        component="h2"
        sx={{ mb: 4 }}
      >
        Why Choose Lafayette AutoCare?
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          mb: 6,
        }}
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Honest Service
          </Typography>

          <Typography variant="body1">
            We believe in straightforward recommendations and transparent
            communication. We'll explain what your vehicle needs and why
            before any work begins.
          </Typography>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Experienced Technicians
          </Typography>

          <Typography variant="body1">
            Our technicians bring experience and attention to detail to every
            vehicle that comes through our shop, from routine maintenance to
            complex repairs.
          </Typography>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Customer Focused
          </Typography>

          <Typography variant="body1">
            We're proud to serve our local community and treat every customer
            with respect. We work hard to provide dependable service and an
            experience you can feel good about.
          </Typography>
        </Card>
      </Box>

      <Typography
        variant="h3"
        component="h2"
        sx={{ mb: 3 }}
      >
        Our Commitment
      </Typography>

      <Typography
        variant="body1"
        sx={{ maxWidth: "800px" }}
      >
        Your vehicle plays an important role in your everyday life, and we're
        here to help keep it running safely and reliably. At Lafayette
        AutoCare, we're committed to providing quality automotive service
        while building lasting relationships with the people we serve.
      </Typography>
    </Box>
  )
}

export default About