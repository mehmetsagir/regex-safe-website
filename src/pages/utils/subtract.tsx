import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Subtract = () => {
  return (
    <Container title="Subtract">
      <h1>subtract</h1>
      <p className="desc">Subtract arguments</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const subtract = (...args) => args.reduce((a, b) => a - b);"}
      />
      <div className="example">
        <div>
          <h4>Example</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"subtract(1, 2, 3, 4); // -8"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Subtract;
