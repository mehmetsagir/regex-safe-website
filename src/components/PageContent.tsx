// @ts-nocheck
import { useState } from "react";
import regexs from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

type CodeProps = {
  el: string;
  regex: string;
  value: string;
};

type Props = {
  title: string;
  description?: string;
  code: CodeProps;
  placeholder?: string;
  exampleCode: string;
  noExample?: boolean;
};

const PageContent: React.FC<Props> = ({
  title,
  description,
  code,
  placeholder,
  exampleCode,
  noExample,
}) => {
  const [value, setValue] = useState("");

  return (
    <Container title={title}>
      <h1>{code.el}</h1>
      {description && <p className="desc">{description}</p>}
      <h4>Regex</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={code.regex}
      />
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const ${code.el} = (${code.value}) => {\n  const regex = ${code.regex}; \n  return regex.test(${code.value});\n};`}
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={exampleCode}
      />
      {noExample && (
        <div className="example">
          <div className="input">
            <h5>Input</h5>
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
          {!!value.length && (
            <div className="output">
              <h5>Output</h5>
              {String(regexs[code.el](value))}
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default PageContent;
