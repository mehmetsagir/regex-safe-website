// @ts-nocheck
import { useState } from "react";
import { range } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const CastArray = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  return (
    <Container title="Range">
      <h1>range</h1>
      {<p className="desc">Creates an array of numbers in the given range.</p>}
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);"
        }
      />
      <div className="example">
        <div style={{ marginBottom: 14 }}>
          <h5>First Value</h5>
          <input
            min={0}
            max={300}
            type="number"
            placeholder="First number"
            value={firstValue}
            onChange={({ target }) => setFirstValue(Number(target.value))}
          />
        </div>
        <div>
          <h5>Input</h5>
          <input
            min={0}
            max={300}
            type="number"
            placeholder="Second value"
            value={secondValue}
            onChange={({ target }) => setSecondValue(Number(target.value))}
          />
        </div>
        {!!range(firstValue, secondValue) && (
          <div className="output">
            <h5>Output</h5>
            <span>{range(firstValue, secondValue).join(", ")}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CastArray;
