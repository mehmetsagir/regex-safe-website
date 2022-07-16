import Container from "src/components/Container";
import Editor from "src/components/Editor";

const HasFocus = () => {
  return (
    <Container title="hasFocus">
      <h1>hasFocus</h1>
      <p className="desc">Check if an element is focused</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const hasFocus = (ele) => ele === document.activeElement;"}
      />
    </Container>
  );
};

export default HasFocus;
