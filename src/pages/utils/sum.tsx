// @ts-nocheck
import { sum } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Sum = () => {
  const value = [1, 2, 3, 4, 5];

  return (
    <Container title="Sum">
      <h1>sum</h1>
      <p className="desc">Get the sum of an array of numbers</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const sum = (arr) => arr.reduce((a, b) => a + b, 0);"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={`sum([${value}])`}
          />
        </div>
        {!!sum(value) && (
          <div className="output">
            <h5>Output</h5>
            <span>{sum(value)}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Sum;
