import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 3,
        textAlign: "center",
        backgroundColor: "#1f2937",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Lafayette AutoCare
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Link
          to="/"
          style={{ color: "white", margin: "0 10px" }}
        >
          Home
        </Link>

        <Link
          to="/services"
          style={{ color: "white", margin: "0 10px" }}
        >
          Services
        </Link>

        <Link
          to="/about"
          style={{ color: "white", margin: "0 10px" }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{ color: "white", margin: "0 10px" }}
        >
          Contact
        </Link>
      </Box>

      <Typography variant="body2">
        © 2026 Lafayette AutoCare. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer