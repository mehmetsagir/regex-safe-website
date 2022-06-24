import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Chunk = () => {
  return (
    <Container title="Chunk">
      <h1>chunk</h1>
      <p className="desc">Split an array into chunks</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);"
        }
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
              "chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Chunk;
