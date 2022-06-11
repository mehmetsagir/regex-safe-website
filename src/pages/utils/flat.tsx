import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Flat = () => {
  return (
    <Container title="Flat">
      <h1>flat</h1>
      <p className="desc">Flatten an Array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);"
        }
      />
      <div className="example">
        <div>
          <h4>Example Value</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"flat([1, [2, 3], [4, 5]]) // [1, 2, 3, 4, 5]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Flat;
