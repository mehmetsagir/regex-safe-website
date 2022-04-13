import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h1>Regex Safe</h1>
      <p className="desc">
        With Regex Safe&apos;s controls and tools, you can do your work much
        faster and easier.
      </p>
      <div className="link">
        <p>
          Also, the Regex Safe
          <a
            href="https://github.com/mehmetsagir/regex-safe"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;package
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://github.com/mehmetsagir/regex-safe-website"
            target="_blank"
            rel="noreferrer"
          >
            website&nbsp;
          </a>
          are open source being developed.
        </p>
        <p>You can support to make it better &#xbb;</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  letter-spacing: 0.6px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/image.svg") no-repeat center;
    z-index: -1;
    opacity: 0.05;
  }
  h1 {
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 14px;
  }
  .desc,
  .link {
    font-size: 22px;
    font-weight: 200;
  }
  .desc:hover + .link a,
  .link:hover a {
    color: ${({ theme }) => theme.colors.link};
  }
  .link {
    font-size: 20px;
    a {
      transition: 250ms;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Home;
