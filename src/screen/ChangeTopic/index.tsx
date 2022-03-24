import { Controller, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  InputText,
  Topic,
  Message,
  ButtonContainer,
  InputTextMessage,
  Error,
} from "./styles";
import { Button } from "../../components/Button";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ItemDTO } from "../../dtos/ItemDTO";

const schema = Yup.object().shape({
  ds_topico: Yup.string().required("O campo de Topico é obrigatório."),
  ds_mensagem: Yup.string().required("O campo de Mensagem é obrigatório."),
});

export function ChangeTopic() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState<ItemDTO>(Object);

  const { idtopico } = useParams();

  useEffect(() => {
    async function loadDate() {
      const response = await api.get(`/Topico/${idtopico}`);
      setTopic(response.data);
    }
    loadDate();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleChangeTopico(form: any) {
    try {
      await api.put(`/Topico/${idtopico}`, {
        idtopico: idtopico,
        ds_topico: form.ds_topico,
        ds_mensagem: form.ds_mensagem,
        nm_usuario: "Renner Alves",
      });
      reset();
      window.alert("Alterado com sucesso");
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Alterar Topico" />

      <Content>
        <Topic>Topico</Topic>
        <Controller
          control={control}
          name="ds_topico"
          render={({ field: { onChange } }) => (
            <InputText onChange={onChange} defaultValue={topic.ds_topico} />
          )}
        />
        {errors.ds_topico && <Error>{errors.ds_topico.message}</Error>}

        <Message>Mensagem</Message>
        <Controller
          control={control}
          name="ds_mensagem"
          render={({ field: { onChange } }) => (
            <InputTextMessage
              onChange={onChange}
              defaultValue={topic.ds_mensagem}
            />
          )}
        />

        {errors.ds_mensagem && <Error>{errors.ds_mensagem.message}</Error>}

        <ButtonContainer>
          <Button onClick={handleSubmit(handleChangeTopico)} title="Editar" />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
