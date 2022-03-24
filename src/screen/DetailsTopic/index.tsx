import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { DeleteTopicModal } from "../../components/DeleteTopicModal";
import { Header } from "../../components/Header";
import { ItemDTO } from "../../dtos/ItemDTO";
import { GoMarkGithub } from "react-icons/go";

import {
  Container,
  Content,
  ContentName,
  Name,
  About,
  ButtonContainer,
  ContentMain,
} from "./styles";
import api from "../../services/api";
import { useEffect } from "react";

export function DetailsTopic() {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [topic, setTopic] = useState<ItemDTO>();
  const params = useParams();
  const id = params.idtopico;

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/Topico/${id}`);
      setTopic(response.data);
    }

    loadData();
  }, []);

  console.log(id);
  function openModal() {
    setIsModal(!isModal);
  }

  function closeModal() {
    setIsModal(!isModal);
  }

  return (
    <>
      <Container>
        <Header title={topic?.ds_topico || ""} />

        <Content>
          <ContentMain>
            <ContentName>
              <GoMarkGithub size={50} />
              <Name>{topic?.nm_usuario}</Name>
            </ContentName>

            <About>{topic?.ds_mensagem}</About>
          </ContentMain>

          <ButtonContainer>
            <Link
              style={{ textDecoration: "none" }}
              key={String(topic?.idtopico)}
              to={`/change/${topic?.idtopico}`}
            >
              <Button
                title="Editar"
                onClick={() => navigate(`change`, { state: topic?.idtopico })}
              />
            </Link>
            <Button title="Remover" onClick={openModal} />
          </ButtonContainer>
        </Content>

        <DeleteTopicModal isModal={isModal} closeModal={closeModal} id={id} />
      </Container>
    </>
  );
}
