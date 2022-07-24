import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Reload = () => {
  return (
    <Container title="Reload">
      <h1>reload</h1>
      <p className="desc">Reload the current page</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const reload = () => location.reload();"}
      />
    </Container>
  );
};

export default Reload;
