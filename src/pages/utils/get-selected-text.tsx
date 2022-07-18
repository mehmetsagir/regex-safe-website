import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetSelectedText = () => {
  return (
    <Container title="getSelectedText">
      <h1>getSelectedText</h1>
      <p className="desc">Get the selected text</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const getSelectedText = () => window.getSelection().toString();"}
      />
    </Container>
  );
};

export default GetSelectedText;
