import { Box, Center, Input } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { login } from "../services/login"
import { Botao } from "./Botao"

interface ICard {
  title: string,
  paragraph: string,
  details?: string
}

export const Card = ({ title, paragraph, details }: ICard) => {
  return (
    <>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='2.5em'>
        <Box backgroundColor='#FFFFFF' borderRadius='24px' padding='3em'>
          <Header as="h3" size="xl">{title}</Header>
          <Center>
            <h1>{paragraph}</h1>
          </Center>

          <Input className="nome" placeholder="E-mail" />
          <Input placeholder="Password" marginTop="1em" />

          <Center>
            <Botao event={login} marginTop="2em" colorScheme="teal" size="sm" width="100%">Entrar</Botao>
          </Center>
        </Box>
      </Box>
    </>
  )
}