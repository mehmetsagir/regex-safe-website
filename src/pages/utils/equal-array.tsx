// @ts-nocheck
import { useState } from "react";
import { isEqualArray } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const PageContent: React.FC<Props> = () => {
  const [typeSensitivity, setTypeSensitivity] = useState(false);
  const [firstArray, setFirstArray] = useState(["a", "2", "c"]);
  const [secondArray, setSecondArray] = useState(["a", 2, "c"]);

  return (
    <Container title="Equal Array">
      <h1>Equal Array</h1>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const isEqualArray = (a, b, typeSensivity = false) => {
  return a.length === b.length && typeSensivity
    ? a.every((v, i) => v === b[i])
    : a.every((v, i) => v == b[i]);
};`}
      />
      <div className="example">
        <label className="check-wrapper">
          <h5>Type Sensitive:</h5>
          <button onClick={() => setTypeSensitivity(!typeSensitivity)}>
            {typeSensitivity ? "ON" : "OFF"}
          </button>
        </label>
        <div style={{ marginBottom: 14 }}>
          <h5>First Array</h5>
          <input
            type="text"
            placeholder="Enter first array"
            value={firstArray}
            onChange={({ target }) => setFirstArray(target.value)}
          />
        </div>
        <div>
          <h5>Second Array</h5>
          <input
            type="text"
            placeholder="Enter second array"
            value={secondArray}
            onChange={({ target }) => setSecondArray(target.value)}
          />
        </div>
        <div className="output">
          <h5>Output</h5>
          <span>
            {String(
              isEqualArray(
                Array.from(firstArray.slice(",")),
                Array.from(secondArray.slice(",")),
                typeSensitivity
              )
            )}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default PageContent;
