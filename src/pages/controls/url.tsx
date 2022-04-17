// @ts-nocheck
import { useState } from "react";
import { isURL } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const URL = () => {
  const [exampleURL, setExampleURL] = useState("");

  return (
    <Container title="URL">
      <h1>isURL</h1>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isURL = (url) => {\n  const regex = /^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$/g \n  return regex.test(url);\n};"
        }
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "import { isURL } from 'regex-safe'; \n\nisURL('https://mehmetsagir.dev'); // 'true'\nisURL('https://mehmetsagir'); // 'false'"
        }
      />
      <div className="example">
        <div className="input">
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Enter url"
            value={exampleURL}
            onChange={({ target }) => setExampleURL(target.value)}
          />
        </div>
        <div className="output">
          <h5>Output</h5>
          {String(isURL(exampleURL))}
        </div>
      </div>
    </Container>
  );
};

export default URL;
