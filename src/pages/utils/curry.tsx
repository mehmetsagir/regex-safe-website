import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Curry = () => {
  return (
    <Container title="Curry">
      <h1>curry</h1>
      <p className="desc">Curry a function</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const curry = (fn, ...args) => (fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args));"
        }
      />
    </Container>
  );
};

export default Curry;
