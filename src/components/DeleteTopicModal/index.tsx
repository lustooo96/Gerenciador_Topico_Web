import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Button } from "../Button";
import {
  Content,
  ContainerModal,
  ContainerText,
  Title,
  Text,
  ContainerButton,
} from "./styles";

interface ModalProps {
  isModal: boolean;
  closeModal: () => void;
  id: string | undefined;
}
export function DeleteTopicModal({ isModal, closeModal, id }: ModalProps) {
  const navigate = useNavigate();
  async function DeleteTopic() {
    await api.delete(`/Topico/${id}`).then(() => {
      window.alert("Removido com sucesso");
      navigate("/");
    });
  }

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={() => closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContainerModal>
        <Content>
          <ContainerText>
            <Title>Atenção</Title>
            <Text>Confirma a remoção do tópico?</Text>
          </ContainerText>
          <ContainerButton>
            <Button title="Confirmar" onClick={DeleteTopic} />
            <Button title="Cancelar" onClick={closeModal} />
          </ContainerButton>
        </Content>
      </ContainerModal>
    </Modal>
  );
}
