import Container from "src/components/Container";
import Editor from "src/components/Editor";

const FormatSeconds = () => {
  return (
    <Container title="Format Seconds">
      <h1>Format Seconds</h1>
      <p className="desc">Convert seconds to hh:mm:ss format</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);"
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
            code={"formatSeconds(200); // 00:03:20"}
          />
        </div>
      </div>
    </Container>
  );
};

export default FormatSeconds;
