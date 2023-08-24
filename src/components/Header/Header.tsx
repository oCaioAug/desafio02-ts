import { Heading } from '@chakra-ui/react'

export const Header  = ({as, size, children}: any) => {
  return(
    <Heading as={as} size={size}>
      {children}
    </Heading>
  );
}
