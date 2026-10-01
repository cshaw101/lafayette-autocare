import { Card, Typography } from "@mui/material"

function FeatureCard({ title, description }) {

  return (

    <Card sx={{ p: 3, height: "100%" }}>

      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Typography variant="body1">
        {description}
      </Typography>

    </Card>

  )

}

export default FeatureCard