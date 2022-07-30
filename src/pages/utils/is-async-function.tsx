import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsAsyncFunction = () => {
  return (
    <Container title="is Async Function">
      <h1>isAsyncFunction</h1>
      <p className="desc">Check if a value is an async function</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isAsyncFunction = (v) => Object.prototype.toString.call(v) === '[object AsyncFunction]';"
        }
      />
    </Container>
  );
};

export default IsAsyncFunction;
