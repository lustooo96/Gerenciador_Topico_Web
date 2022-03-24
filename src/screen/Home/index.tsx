import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardTopic } from "../../components/CardTopic";
import { Header } from "../../components/Header";
import { ItemDTO } from "../../dtos/ItemDTO";
import api from "../../services/api";

import { Container, Content, ContainerTopic } from "./styles";

export function Home() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState<ItemDTO[]>([]);
  useEffect(() => {
    async function loadScreen() {
      try {
        const response = await api.get("/Topico");
        setTopic(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadScreen();
  }, []);
  return (
    <Container>
      <Header title="Topicos" />

      <Content>
        {topic.map((item) => (
          <ContainerTopic>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              key={String(item.idtopico)}
              to={`/users/${item.idtopico}`}
            >
              <CardTopic
                data={item}
                onClick={() => {
                  navigate("/users", { state: item.idtopico });
                }}
              />
            </Link>
          </ContainerTopic>
        ))}
      </Content>
    </Container>
  );
}
