import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledLi } from "./styles";

interface IListItemProps {
  title: string;
  status: string;
  techId: string;
}

const ListItem = ({ title, status, techId }: IListItemProps) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <StyledLi>
      <h3>{title}</h3>
      <div>
        <p>{status}</p>
        <button onClick={() => deleteTech(techId)}>Excluir</button>
      </div>
    </StyledLi>
  );
};

export default ListItem;
