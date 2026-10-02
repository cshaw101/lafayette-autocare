import { useState } from "react"
import { Box, Typography } from "@mui/material"
import { Card, TextInput, Select, Textarea } from "@mantine/core"
import { services } from "../data/services"
import Button from "../components/Button"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  return (
    <Box sx={{ py: 6, maxWidth: "700px", mx: "auto" }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mb: 2, textAlign: "center" }}
      >
        Contact Lafayette AutoCare
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 5, textAlign: "center" }}
      >
        Tell us what your vehicle needs and we'll get back to you shortly.
      </Typography>

      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <form
          onSubmit={(e) => {
            e.preventDefault()

            setSubmitted(true)

            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            })
          }}
        >
          <TextInput
            label="Name"
            required
            mb="md"
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }}
          />

          <TextInput
            label="Email"
            type="email"
            required
            mb="md"
            value={formData.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }}
          />

          <TextInput
            label="Phone Number"
            mb="md"
            value={formData.phone}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }}
          />

          <Select
            label="Service"
            required
            mb="md"
            value={formData.service}
            onChange={(value) => {
              setFormData({
                ...formData,
                service: value,
              })
            }}
            data={services.map((service) => ({
              value: service.name,
              label: service.name,
            }))}
          />

          <Textarea
            label="Message"
            required
            mb="lg"
            minRows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }}
          />

          {submitted && (
            <Typography
              variant="body1"
              sx={{ mb: 3 }}
            >
              Thanks! Your service request has been received. We'll contact
              you shortly.
            </Typography>
          )}

          <Button type="submit">
            Submit Service Request
          </Button>
        </form>
      </Card>
    </Box>
  )
}

export default Contact