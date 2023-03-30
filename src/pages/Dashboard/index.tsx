import {
  Container,
  ContainerInfo,
  Containeritem,
  ContainerModules,
  ContainerModulesHeader,
  StyledHeader,
  StyledMain,
} from "./styles";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import logo from "./logo.png";
import plus from "./plus.png";
import TechList from "../../Components/TechList";
import AddModal from "../../Components/AddModal";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const { user, loading } = useContext(UserContext);

  function logout() {
    window.localStorage.clear();
    navigate("/login", { replace: true });
  }

  if (loading) return <StyledMain />;

  return user ? (
    <>
      <StyledHeader>
        <Container>
          <img src={logo} alt="Logo" />
          <button onClick={logout}>Logout</button>
        </Container>
      </StyledHeader>
      <StyledMain>
        <ContainerInfo>
          <div>
            <h1>Olá, {user.name}</h1>
            <p>{user.course_module}</p>
          </div>
        </ContainerInfo>
        <ContainerModulesHeader>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setOpenModal(true)}>
              <img src={plus} alt="Adicionar" />
            </button>
          </div>
        </ContainerModulesHeader>
        <ContainerModules>
          <Containeritem>
            <TechList user={user} />
          </Containeritem>
        </ContainerModules>
        {openModal && <AddModal closeModal={setOpenModal} />}
      </StyledMain>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Dashboard;
