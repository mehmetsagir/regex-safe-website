import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsGeneratorFunction = () => {
  return (
    <Container title="Is Generator Function">
      <h1>isGeneratorFunction</h1>
      <p className="desc">Check if a value is a generator function</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]';"
        }
      />
    </Container>
  );
};

export default IsGeneratorFunction;
