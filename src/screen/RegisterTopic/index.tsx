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
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const schema = Yup.object().shape({
  ds_topico: Yup.string().required("O campo de Topico é obrigatório."),
  ds_mensagem: Yup.string().required("O campo de Mensagem é obrigatório."),
});

export function RegisterTopic() {
  const navigate = useNavigate();

  const { params } = useParams();
  console.log(params);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegisterTopico(form: any) {
    const newTopic = {
      idtopico: String(uuidv4()),
      ds_topico: form.ds_topico,
      ds_mensagem: form.ds_mensagem,
      nm_usuario: "Renner Alves",
    };

    try {
      await api.post("/Topico", newTopic);

      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Topico" />

      <Content>
        <Topic>Topico</Topic>
        <Controller
          control={control}
          name="ds_topico"
          render={({ field: { onChange, value } }) => (
            <InputText onChange={onChange} value={value && value.toString()} />
          )}
        />
        {errors.ds_topico && <Error>{errors.ds_topico.message}</Error>}

        <Message>Mensagem</Message>
        <Controller
          control={control}
          name="ds_mensagem"
          render={({ field: { onChange, value } }) => (
            <InputTextMessage
              onChange={onChange}
              value={value && value.toString()}
            />
          )}
        />
        {errors.ds_mensagem && <Error>{errors.ds_mensagem.message}</Error>}

        <ButtonContainer>
          <Button onClick={handleSubmit(handleRegisterTopico)} title="Postar" />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
