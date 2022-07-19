import Container from "src/components/Container";
import Editor from "src/components/Editor";

const InsertAfter = () => {
  return (
    <Container title="insertAfter">
      <h1>insertAfter</h1>
      <p className="desc">Insert an element after other one</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);"
        }
      />
    </Container>
  );
};

export default InsertAfter;
