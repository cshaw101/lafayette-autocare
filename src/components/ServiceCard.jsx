
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

    </Card>

  )

}

export default ServiceCard