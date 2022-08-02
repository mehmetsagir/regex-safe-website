import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Xor = () => {
  return (
    <Container title="Xor">
      <h1>xor</h1>
      <p className="desc">Logical xor operator</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const xor = (a, b) => (a && !b) || (!a && b);"}
      />
    </Container>
  );
};

export default Xor;
