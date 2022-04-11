import theme from "src/styles/theme";
import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <main>
          <Menu />
          {children}
        </main>
      </Container>
    </ThemeProvider>
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
