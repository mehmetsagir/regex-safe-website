import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Mul = () => {
  return (
    <Container title="Mul">
      <h1>mul</h1>
      <p className="desc">Multiply arguments</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const mul = (...args) => args.reduce((a, b) => a * b);"}
      />
    </Container>
  );
};

export default Mul;
