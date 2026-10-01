import { Button as MantineButton } from "@mantine/core"



function Button({ children, onClick }) {

  return (

    <MantineButton onClick={onClick}>
      {children}
    </MantineButton>

  )

}

export default Button