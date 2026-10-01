import { useState } from "react"
import { services } from "../data/services"
import { TextInput, Select, Textarea } from "@mantine/core"
import Button from "../components/Button"




function Contact() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
})
const [submitted, setSubmitted] = useState(false)





  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setSubmitted(true)
      setFormData({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
})
    }}>
  <h2>Contact Lafayette AutoCare</h2>

<TextInput
  label="Name"
  value={formData.name}
  onChange={(e) => {
    setFormData({
      ...formData,
      name: e.target.value
    })
  }}
/>


 
  <TextInput
  label="Email"
  required
  value={formData.email}
  onChange={(e) => {
    setFormData({
      ...formData,
      email: e.target.value
    })
  }}
  />

<TextInput
  label="Phone Number"
  value={formData.phone}
  onChange={(e) => {
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }}
/>

<Select
  label="Service"
  required
  value={formData.service}
  onChange={(value) => {
    setFormData({
      ...formData,
      service: value
    })
  }}
  data={services.map((service) => ({
    value: service.name,
    label: service.name
  }))}
/>

<Textarea
  label="Message"
  required
  value={formData.message}
  onChange={(e) => {
    setFormData({
      ...formData,
      message: e.target.value
    })
  }}
/>
{submitted && (
  <p>
    Thanks! Your service request has been received. We'll contact you shortly.
  </p>
)}



<Button type="submit">
  Submit
</Button>
</form>
  )
}

export default Contact