import Container from "src/components/Container";
import Editor from "src/components/Editor";

const ToObj = () => {
  return (
    <Container title="toObj">
      <h1>toObj</h1>
      <p className="desc">Create an object from the pairs of key and value</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const toObj = (arr) => Object.fromEntries(arr);"}
      />
      <div className="example">
        <div>
          <h4>Example</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={
              "toObj([ ['a', 1], ['b', 2], ['c', 3], ]); // { a: 1, b: 2, c: 3 }"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default ToObj;
