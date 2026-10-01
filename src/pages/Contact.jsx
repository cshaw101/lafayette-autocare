import { useState } from "react"
import { services } from "../data/services"




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

  <label>Name</label>

  <input
    type="text"
    required
    value={formData.name}
    onChange={(e) => {
      setFormData({
        ...formData,
        name: e.target.value
      })
    }}
  />


  <label>Email</label>
  <input 
  type="email"
  required
  value={formData.email}
  onChange={(e) => {
    setFormData({
      ...formData,
      email: e.target.value
    })
  }}
  />

  <label>Phone Number</label>
  <input
  type='tel'
  value={formData.phone}
  onChange={(e) => {
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }}


/>

<label>Service</label>
<select value={formData.service}
  required
onChange={(e) => {
    setFormData({
      ...formData,
      service: e.target.value
    })
  }}

>
  
{services.map((service) => {
  return (
    <option key={service.name} value={service.name}>{service.name}</option>
  )
})}
</select>

<label>Contact Us</label>
<textarea value={formData.message}
  required
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



<button type="submit">Submit</button>
</form>
  )
}

export default Contact