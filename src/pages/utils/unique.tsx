import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Unique = () => {
  return (
    <Container title="Unique">
      <h1>unique</h1>
      <p className="desc">Get the unique values of an array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const unique = (arr) => [...new Set(arr)];"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"unique([1, 2, 3, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Unique;
