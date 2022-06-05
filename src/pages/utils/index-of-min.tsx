// @ts-nocheck
import { indexOfMin } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IndexOfMin = () => {
  const values = [7, 3, 6, 10, 23];

  return (
    <Container title="Index of Min">
      <h1>indexOfMin</h1>
      {<p className="desc">Find the index of the minimum item of an array</p>}
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const indexOfMin = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);"
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
            code={"indexOfMin([7, 3, 6, 10, 23])"}
          />
        </div>
        {!!indexOfMin(values) && (
          <div className="output">
            <h5>Output</h5>
            <span>{indexOfMin(values)}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default IndexOfMin;
