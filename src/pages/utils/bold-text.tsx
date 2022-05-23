// @ts-nocheck
import { useState } from "react";
import { boldText } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const PageContent: React.FC<Props> = () => {
  const [caseSensitivity, setCaseSensitivity] = useState(false);
  const [value, setValue] = useState("Mehmet");
  const [result, setResult] = useState("Hi, I am Mehmet!");

  return (
    <Container title="Bold Text">
      <h1>boldText</h1>
      {/* {description && <p className="desc">{description}</p>} */}
      <h4>Regex</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={new RegExp(`(\\b${value}\\w*)`, caseSensitivity ? "g" : "gi")}
      />
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const boldText = (str, boldText, caseSensitivity) => {
  const regex = new RegExp("(\\b" + boldText + "\\w*)", caseSensitivity ? "g" : "gi");
  const replacement = "<b>$1</b>";

  return str.replace(regex, replacement);
};`}
      />
      <div className="example">
        <label className="check-wrapper">
          <h5>Case Sensitive:</h5>
          <button onClick={() => setCaseSensitivity(!caseSensitivity)}>
            {caseSensitivity ? "ON" : "OFF"}
          </button>
        </label>
        <div style={{ marginBottom: 14 }}>
          <h5>Text in Bold</h5>
          <input
            type="text"
            placeholder="Type something"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div>
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Type something"
            value={result}
            onChange={({ target }) => setResult(target.value)}
          />
        </div>
        {!!value.length && (
          <div className="output">
            <h5>Output</h5>
            <span
              style={{
                fontWeight: 200,
              }}
              dangerouslySetInnerHTML={{
                __html: boldText(result, value, caseSensitivity),
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default PageContent;
