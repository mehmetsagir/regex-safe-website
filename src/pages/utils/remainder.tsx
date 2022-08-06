import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Remainder = () => {
  return (
    <Container title="Remainder">
      <h1>remainder</h1>
      <p className="desc">Calculate the remainder of division of arguments</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const remainder = (...args) => args.reduce((a, b) => a % b);"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"remainder(1, 2, 3, 4); // 1"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Remainder;
