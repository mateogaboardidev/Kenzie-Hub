import { CreateBtn, StyledAddModal, Error } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import * as yup from "yup";

interface IAddModalProps {
  closeModal: any;
}

interface IAddModal {
  title: string;
  status: string;
}

const AddModal = ({ closeModal }: IAddModalProps) => {
  const { createTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddModal>({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledAddModal onSubmit={handleSubmit(createTech)}>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => closeModal(false)}>X</button>
      </div>
      <span>Nome</span>
      <input placeholder="Typescript" {...register("title")} />
      <Error>{errors.title?.message}</Error>
      <span>Selecionar status</span>
      <select {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <Error>{errors.status?.message}</Error>
      <CreateBtn type="submit">Criar Tecnologia</CreateBtn>
    </StyledAddModal>
  );
};

export default AddModal;
