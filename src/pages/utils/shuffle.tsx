import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Shuffle = () => {
  return (
    <Container title="Shuffle">
      <h1>shuffle</h1>
      <p className="desc">Shuffle an array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const shuffle = (arr) => arr.map((a) => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value);"
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
              "shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Shuffle;
