import { Container, Title } from "./styles";

interface PropsButton {
  onClick?: () => void;
  title: string;
  color?: string;
}

export function Button({ onClick, title, color, ...rest }: PropsButton) {
  return (
    <Container onClick={onClick} {...rest} color={color ? color : "black"}>
      <Title>{title}</Title>
    </Container>
  );
}
