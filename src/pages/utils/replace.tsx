import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Replace = () => {
  return (
    <Container title="Replace">
      <h1>replace</h1>
      <p className="desc">Replace an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);"
        }
      />
    </Container>
  );
};

export default Replace;
