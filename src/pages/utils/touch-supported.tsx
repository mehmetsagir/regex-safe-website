import Container from "src/components/Container";
import Editor from "src/components/Editor";

const TouchSupported = () => {
  return (
    <Container title="touchSupported">
      <h1>touchSupported</h1>
      <p className="desc">Check if the touch events are supported</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const touchSupported = () => 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);"
        }
      />
    </Container>
  );
};

export default TouchSupported;
