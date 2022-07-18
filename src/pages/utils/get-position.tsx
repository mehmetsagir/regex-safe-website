import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetPosition = () => {
  return (
    <Container title="getPosition">
      <h1>getPosition</h1>
      <p className="desc">
        Get the position of an element relative to the document
      </p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY });"
        }
      />
    </Container>
  );
};

export default GetPosition;
