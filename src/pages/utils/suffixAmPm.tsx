import { useState } from "react";
// @ts-ignore
import { suffixAmPm } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const SuffixAmPm = () => {
  const [value, setValue] = useState("");

  return (
    <Container title="Suffix Am / Pm">
      <h1>suffixAmPm</h1>
      <p className="desc">Add AM PM suffix to an hour</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const suffixAmPm = (h) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;"
        }
      />
      <div className="example">
        <div style={{ marginTop: 14 }}>
          <h5>Enter hour</h5>
          <input
            type="text"
            placeholder="Type something"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        {!!suffixAmPm(value) && (
          <div className="output">
            <h5>Output</h5>
            <span>{suffixAmPm(value)}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SuffixAmPm;
