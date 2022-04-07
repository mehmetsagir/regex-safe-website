import Link from "next/link";
import { GithubIcon, NPMIcon } from "src/utils/icons";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <a className="package-link">regex-safe</a>
      </Link>
      <div className="actions">
        <a
          href="https://www.npmjs.com/package/regex-safe"
          target="_blank"
          rel="noreferrer"
        >
          <NPMIcon />
        </a>
        <a
          href="https://github.com/mehmetsagir/regex-safe"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 28px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.shadow};

  .package-link {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export default Header;
