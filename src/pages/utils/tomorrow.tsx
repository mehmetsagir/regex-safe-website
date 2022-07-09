// @ts-ignore
import { tomorrow } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Tomorrow = () => {
  return (
    <Container title="Tomorrow">
      <h1>tomorrow</h1>
      <p className="desc">Swap the rows and columns of a matrix</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);"
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
            code={"tomorrow(); // 2022-07-10T17:34:28.400Z"}
          />
        </div>
        <p
          style={{
            marginTop: 24,
            color: "#ccc",
            opacity: 0.6,
          }}
        >
          Tomorrow: {tomorrow().toString()}
        </p>
      </div>
    </Container>
  );
};

export default Tomorrow;
