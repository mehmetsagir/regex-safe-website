import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Sort = () => {
  return (
    <Container title="Sort">
      <h1>sort</h1>
      <p className="desc">Sort an array of numbers</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const sort = (arr) => arr.sort((a, b) => a - b);"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Sort;
