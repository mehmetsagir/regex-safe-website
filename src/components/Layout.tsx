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
          <div className="page">
            <div className="page-content">{children}</div>
          </div>
        </main>
      </Container>
    </StyledThemeProvider>
  );
};

const Container = styled.div`
  main {
    display: flex;
    height: calc(100vh - 52px);

    .page {
      overflow: auto;
      width: 100%;
      &-content {
        height: 100%;
        width: 800px;
        margin: 70px auto;

        @media (max-width: 1200px) {
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }
`;

export default Layout;
