// @ts-nocheck
import { indexOfMax } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IndexOfMax = () => {
  const values = [7, 3, 6, 10, 23];

  return (
    <Container title="Index of Max">
      <h1>indexOfMax</h1>
      {<p className="desc">Find the index of the maximum item of an array</p>}
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);"
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
            code={"indexOfMax([7, 3, 6, 10, 23])"}
          />
        </div>
        {!!indexOfMax(values) && (
          <div className="output">
            <h5>Output</h5>
            <span>{indexOfMax(values)}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default IndexOfMax;
