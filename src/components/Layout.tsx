import StyledThemeProvider from "src/styles/ThemeProvider";
import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Layout: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider>
      <Container>
        <Header />
        <main>
          <Menu />
          <div className="page-content">{children}</div>
        </main>
      </Container>
    </StyledThemeProvider>
  );
};

const Container = styled.div`
  max-height: 100vh;
  main {
    display: flex;
    height: 100%;

    .page-content {
      width: 800px;
      margin: 0 auto;
      padding: 120px 0;

      @media (max-width: 1200px) {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
`;

export default Layout;
