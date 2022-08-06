import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Mod = () => {
  return (
    <Container title="Mod">
      <h1>mod</h1>
      <p className="desc">Calculate the mod of collection index</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const mod = (a, b) => ((a % b) + b) % b;"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"mod(-1, 5); // 4"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Mod;
