// @ts-ignore
import { yesterday } from "regex-safe";

import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Yesterday = () => {
  return (
    <Container title="Yesterday">
      <h1>yesterday</h1>
      <p className="desc">Get the yesterday date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const yesterday = () => new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);"
        }
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"yesterday(); // 2022-07-10T14:32:24.326Z"}
          />
        </div>
        <p
          style={{
            marginTop: 24,
            color: "#ccc",
            opacity: 0.6,
          }}
        >
          Yesterday: {yesterday().toString()}
        </p>
      </div>
    </Container>
  );
};

export default Yesterday;
