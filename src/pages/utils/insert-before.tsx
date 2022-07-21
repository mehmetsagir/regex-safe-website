import Container from "src/components/Container";
import Editor from "src/components/Editor";

const InsertBefore = () => {
  return (
    <Container title="insertBefore">
      <h1>insertBefore</h1>
      <p className="desc">Insert an element before other one</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);"
        }
      />
    </Container>
  );
};

export default InsertBefore;
