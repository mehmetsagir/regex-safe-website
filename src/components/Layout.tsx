import { useRouter } from "next/router";
import StyledThemeProvider from "src/styles/ThemeProvider";
import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  const calcContentHeight =
    router.pathname === "/"
      ? {
          height: "100%",
        }
      : {};

  return (
    <StyledThemeProvider>
      <Container>
        <Header />
        <main>
          <Menu />
          <div className="page">
            <div className="page-content" style={calcContentHeight}>
              {children}
            </div>
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
        width: 800px;
        margin: 0 auto;
        padding: 70px 0;

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
