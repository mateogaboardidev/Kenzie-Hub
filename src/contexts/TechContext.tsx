import { createContext, ReactNode } from "react";
import api from "../services/api";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  createTech: (data: object) => Promise<void>;
  deleteTech: (id: string) => Promise<void>;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const createTech = async (data: object) => {
    const response = await api.post("/users/techs", data);
    const { token } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    window.location.reload();
  };

  const deleteTech = async (id: string) => {
    const response = await api.delete(`/users/techs/${id}`);
    const { token } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    window.location.reload();
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
