import Container from "src/components/Container";
import Editor from "src/components/Editor";

const RemoveFalsy = () => {
  return (
    <Container title="Remove Falsy">
      <h1>removeFalsy</h1>
      <p className="desc">Remove falsy values from array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const removeFalsy = (arr) => arr.filter(Boolean);"}
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
              "removeFalsy([0, '', '', NaN, true, 5, undefined, 'regex-safe', false]); \n// [ 'mehmet', true, 5, 'regex-safe' ]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default RemoveFalsy;
