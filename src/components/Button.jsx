import { Button as MantineButton } from "@mantine/core"



function Button({ children, onClick, type }) {

  return (

   <MantineButton 
  onClick={onClick}
  type={type}
>
  {children}
</MantineButton>

  )

}

export default Button