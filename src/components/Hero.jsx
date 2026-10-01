import { Box, Typography } from "@mui/material"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

function Hero() {

  const navigate = useNavigate()

  return (

  <Box
  sx={{
    textAlign: "center",
    py: 10,
    px: 3,
    backgroundColor: "#f5f5f5",
  }}
>

     <Typography 
  variant="h2" 
  component="h1"
  sx={{ mb: 3 }}
>
  Reliable Auto Repair You Can Trust
</Typography>

      <Typography 
  variant="body1"
  sx={{ mb: 4 }}
>
  Honest service, quality repairs, and dependable maintenance
  for drivers in Lafayette and the surrounding community.
</Typography>

      <Button onClick={() => navigate("/contact")}>
        Schedule Service
      </Button>

    </Box>

  )

}

export default Hero