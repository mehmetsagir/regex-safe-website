import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Siblings = () => {
  return (
    <Container title="siblings">
      <h1>siblings</h1>
      <p className="desc">Get all siblings of an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele);"
        }
      />
    </Container>
  );
};

export default Siblings;
