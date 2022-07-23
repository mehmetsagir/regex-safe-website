import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GoTo = () => {
  return (
    <Container title="goTo">
      <h1>goTo</h1>
      <p className="desc">Redirect to another page</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const goTo = (url) => (location.href = url);"}
      />
    </Container>
  );
};

export default GoTo;
