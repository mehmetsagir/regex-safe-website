import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Repeat = () => {
  return (
    <Container title="Repeat">
      <h1>repeat</h1>
      <p className="desc">Repeat an array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const repeat = (arr, n) => [].concat(...Array(n).fill(arr));"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Repeat;
