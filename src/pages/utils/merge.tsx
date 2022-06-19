import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Merge = () => {
  return (
    <Container title="merge">
      <h1>merge</h1>
      <p className="desc">Merge two arrays</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const merge = (a, b) => [...a, ...b];"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={
              "const a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst merged = merge(a, b);\n[1, 2, 3, 4, 5, 6]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Merge;
