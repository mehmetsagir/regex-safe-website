// @ts-ignore
import { numberOfDays } from "regex-safe";
import { useState } from "react";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const NumberOfDays = () => {
  const [value, setValue] = useState(2022);

  return (
    <Container title="Number of Days">
      <h1>numberOfDays</h1>
      <p className="desc">Get the total number of days in a year</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const numberOfDays = (year) => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365);"
        }
      />
      <div className="example">
        <div>
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Type something"
            value={value}
            onChange={({ target }: any) => setValue(target.value)}
          />
        </div>
        {!!value && (
          <div className="output">
            <h5>Output</h5>
            <span
              style={{
                fontWeight: 200,
              }}
            >
              {numberOfDays(value)}
            </span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default NumberOfDays;
