import { Link } from "react-router-dom"
import { Card, Text, Title } from "@mantine/core"

function ServiceCard({ name, description }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3}>
        {name}
      </Title>

      <Text>
        {description}
      </Text>

      <Link to={`/services/${name.toLowerCase().replace(" ", "-")}`}>
        View Service
      </Link>
    </Card>
  )
}

export default ServiceCard