import { ItemDTO } from "../../dtos/ItemDTO";
import { GoMarkGithub } from "react-icons/go";
import { Container, Content, ItemContainer, Title, About } from "./styles";

interface Props {
  data: ItemDTO;
  onClick: () => void;
}

export function CardTopic({ data, onClick, ...rest }: Props) {
  return (
    <Container {...rest} onClick={onClick}>
      <Content>
        <ItemContainer>
          <GoMarkGithub size={50} />
          <Title>{data.nm_usuario}</Title>
        </ItemContainer>

        <About>{data.ds_mensagem}</About>
      </Content>
    </Container>
  );
}
