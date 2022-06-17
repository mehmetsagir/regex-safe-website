import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Union = () => {
  return (
    <Container title="Union">
      <h1>union</h1>
      <p className="desc">Get union of arrays</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const union = (...arr) => [...new Set(arr.flat())];"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"union([1, 2], [2, 3], [3]); // [1, 2, 3]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Union;
