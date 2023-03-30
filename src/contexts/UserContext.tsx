import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITech } from "../Components/TechList";
import { IUserRegister } from "../pages/Register";
import api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  registerFunc(data: IUserRegister): void;
  login: (data: object) => Promise<void>;
  user: IUser | null;
  loading: boolean;
  tech: never[];
  setTech: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface IUser {
  name: string;
  course_module: string;
  techs: ITech;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [tech, setTech] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-kenziehub:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const login = async (data: object) => {
    const response = await api.post("/sessions", data);
    const { user: userResponse, token } = response.data;

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userResponse);
    localStorage.setItem("@context-kenziehub:token", token);

    navigate("/dashboard", { replace: true });
  };

  function registerFunc(data: IUserRegister): void {
    api.post("/users", data);

    navigate("/login", { replace: true });
  }

  return (
    <UserContext.Provider
      value={{ user, login, registerFunc, loading, tech, setTech }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
