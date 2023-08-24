import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react";

interface IButton {
  event?: MouseEventHandler<HTMLButtonElement>;
  marginTop?: string;
  colorScheme?: string;
  size?: string;
  width?: string;
  children: any
}

export const Botao: React.FC<IButton> = ({ event, marginTop, colorScheme, size, width, children}) => {
  return (
    <Button onClick={event} colorScheme={colorScheme} size={size} width={width} marginTop={marginTop}>
      {children}
    </Button>
  );
}