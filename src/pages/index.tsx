import Editor from "src/components/Editor";
import styled from "styled-components";

const Home = () => (
  <Container>
    <div className="desc">
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
    </div>
    <div className="getting-started">
      <h2>Getting Started</h2>
      <Editor code={"npm i regex-safe"} language="bash" />
      <Editor
        language="bash"
        style={{
          marginTop: "8px",
        }}
        code={"yarn add regex-safe"}
      />
    </div>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .desc {
    text-align: center;
    letter-spacing: 0.6px;
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
  }
  .getting-started {
    width: 100%;
    margin-top: 60px;

    h2 {
      font-size: 22px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    .editor {
      margin-top: 20px;
    }
  }
`;

export default Home;
