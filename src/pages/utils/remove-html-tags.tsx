// @ts-nocheck
import { useState } from "react";
import { removeHTMLTags } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const RemoveHTMLTags = () => {
  const [exampleText, setExampleText] = useState("");

  return (
    <Container title="Remove HTML Tags">
      <h1>removeHTMLTags</h1>
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
          "const removeHTMLTags = (str) => {\n  const regex = /<[^>]*>/g;     \n  return str.replaceAll(regex, '');\n};"
        }
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "import { removeHTMLTags } from 'regex-safe'; \n\nconst text = '<p>Hello World</p>'; \nconst result = removeHTMLTags(text); \n\nconsole.log(result); // 'Hello World'"
        }
      />
      <div className="example">
        <div className="input">
          <h5>Input</h5>
          <Editor
            placeholder="Enter HTML codes."
            code={exampleText}
            language="html"
            disabled={false}
            onChange={({ target }) => {
              setExampleText(removeHTMLTags(target.value));
            }}
            noCopy
          />
        </div>
        {exampleText.length > 0 && (
          <div className="output">
            <h5>Output</h5>
            {exampleText}
          </div>
        )}
      </div>
    </Container>
  );
};

export default RemoveHTMLTags;
