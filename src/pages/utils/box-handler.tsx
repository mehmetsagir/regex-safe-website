import Container from "src/components/Container";
import Editor from "src/components/Editor";

const BoxHandler = () => {
  return (
    <Container title="BoxHandler">
      <h1>BoxHandler</h1>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const boxHandler = (x) => ({ next: (f) => boxHandler(f(x)), done: (f) => f(x) });"
        }
      />
    </Container>
  );
};

export default BoxHandler;
