// @ts-nocheck
import { useState } from "react";
import { isEmail } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Email = () => {
  const [exampleEmail, setExampleEmail] = useState("");

  return (
    <Container title="Email">
      <h1>isEmail</h1>
      <p className="desc">
        Returns the text by deleting the html tags from the given value.
      </p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isEmail = (email) => {\n  const regex = /^[w-.]+@([w-]+.)+[w-]{2,4}$/g;     \n  return regex.test(email); \n};"
        }
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "import { isEmail } from 'regex-safe'; \n\nconsole.log(isEmail('mehmetsagirdev@gmail.com')); // 'true'"
        }
      />
      <div className="example">
        <div className="input">
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Enter your email"
            value={exampleEmail}
            onChange={({ target }) => setExampleEmail(target.value)}
          />
        </div>
        <div className="output">
          <h5>Output</h5>
          {String(isEmail(exampleEmail))}
        </div>
      </div>
    </Container>
  );
};

export default Email;
