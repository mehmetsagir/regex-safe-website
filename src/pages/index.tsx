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
          Also, the Regex Safe{" "}
          <a
            href="https://github.com/mehmetsagir/regex-safe"
            target="_blank"
            rel="noreferrer"
          >
            package
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/mehmetsagir/regex-safe-website"
            target="_blank"
            rel="noreferrer"
          >
            website
          </a>{" "}
          are open source being developed.
        </p>
        <p>You can support to make it better &#xbb;</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 120px;
  h1 {
    font-size: 60px;
    letter-spacing: 2px;
    font-weight: 400;
    margin-bottom: 14px;
  }
  .desc {
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 0.6px;
  }

  .link {
    font-size: 20px;
    font-weight: 200;
    text-align: center;
    letter-spacing: 0.6px;

    &:hover a {
      color: ${({ theme }) => theme.colors.link};
    }

    a {
      transition: 250ms;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Home;
