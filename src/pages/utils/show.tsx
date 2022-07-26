import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Show = () => {
  return (
    <Container title="Show">
      <h1>show</h1>
      <p className="desc">Show an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const show = (ele) => (ele.style.display = '');"}
      />
    </Container>
  );
};

export default Show;
