import Navbar from './Navbar'
import Footer from "./Footer"
import { Container } from "@mantine/core"



function Layout({ children }) {

  return (
    <>
    <Navbar />
    <Container>
  {children}
</Container>
    <Footer />

    </>
  )

}

export default Layout