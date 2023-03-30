import { ReactNode, useState } from "react";
import { IUser } from "../../contexts/UserContext";
import ListItem from "../ListItem";
import { StyledTechList } from "./styles";

interface ITechListProps {
  user: IUser;
}

export interface ITech {
  title: string;
  status: string;
  id: string;
  map(arg0: (tech: any, index: any) => JSX.Element): ReactNode;
}

const TechList = ({ user }: ITechListProps) => {
  const results = user.techs;

  const [techs, setTechs] = useState<ITech | []>([]);

  setTechs(results);

  return (
    <StyledTechList>
      {techs.map((tech, index) => (
        <ListItem
          key={index}
          title={tech.title}
          status={tech.status}
          techId={tech.id}
        />
      ))}
    </StyledTechList>
  );
};

export default TechList;
