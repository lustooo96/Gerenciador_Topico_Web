import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdOutlineQueue } from "react-icons/md";

import {
  Container,
  Title,
  ButtonFooter,
  ContainerMain,
  ContainerTitle,
} from "./styles";

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>

      <ContainerMain>
        <ButtonFooter
          onClick={() => {
            navigate("/");
          }}
        >
          <ImHome size={40} />
        </ButtonFooter>
        <ButtonFooter
          onClick={() => {
            navigate("/register");
          }}
        >
          <MdOutlineQueue size={40} />
        </ButtonFooter>
      </ContainerMain>
    </Container>
  );
}
