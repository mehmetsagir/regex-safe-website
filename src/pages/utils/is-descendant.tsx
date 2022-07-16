import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsDescendant = () => {
  return (
    <Container title="isDescendant">
      <h1>isDescendant</h1>
      <p className="desc">Check if an element is a descendant of another</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const isDescendant = (child, parent) => parent.contains(child);"}
      />
    </Container>
  );
};

export default IsDescendant;
