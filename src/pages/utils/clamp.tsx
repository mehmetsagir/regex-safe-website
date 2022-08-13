import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Clamp = () => {
  return (
    <Container title="Clamp">
      <h1>clamp</h1>
      <p className="desc">Clamp a number between two values</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));"
        }
      />
    </Container>
  );
};

export default Clamp;
