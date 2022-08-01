import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Unary = () => {
  return (
    <Container title="Unary">
      <h1>unary</h1>
      <p className="desc">Create a function that accepts a single argument</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const unary = (fn) => (arg) => fn(arg);"}
      />
    </Container>
  );
};

export default Unary;
