// @ts-nocheck
import { useState } from "react";
import { isNum } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Number = () => {
  const [value, setValue] = useState("");

  return (
    <Container title="Number">
      <h1>isNum</h1>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isNum = (num) => {\n  const regex = /^[1-9]d*$/g;     \n  return regex.test(num); \n};"
        }
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "import { isNum } from 'regex-safe'; \n\nisNum(4); // 'true'\nisNum('mehmet'); // 'false'"
        }
      />
      <div className="example">
        <div className="input">
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Enter number"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className="output">
          <h5>Output</h5>
          {String(isNum(value))}
        </div>
      </div>
    </Container>
  );
};

export default Number;
