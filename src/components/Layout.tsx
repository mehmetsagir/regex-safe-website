import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        {children}
      </main>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  main {
    display: flex;
    height: 100%;
  }
`;

export default Layout;
