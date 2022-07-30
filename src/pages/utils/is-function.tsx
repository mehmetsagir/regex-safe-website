import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsFunction = () => {
  return (
    <Container title="isFunction">
      <h1>isFunction</h1>
      <p className="desc">Check if a value is a function</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isFunction = (v) => ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v));"
        }
      />
    </Container>
  );
};

export default IsFunction;
