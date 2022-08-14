import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Digitize = () => {
  return (
    <Container title="Digitize">
      <h1>digitize</h1>
      <p className="desc">Get the arrays of digits from a number</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const digitize = (n) => `${n}`.split('').map((v) => parseInt(v, 10));"
        }
      />
    </Container>
  );
};

export default Digitize;
