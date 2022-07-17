import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsAtBottom = () => {
  return (
    <Container title="isAtBottom">
      <h1>isAtBottom</h1>
      <p className="desc">Check if user scrolls to the bottom of the page</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;"
        }
      />
    </Container>
  );
};

export default IsAtBottom;
