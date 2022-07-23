import Container from "src/components/Container";
import Editor from "src/components/Editor";

const InsertHTMLBefore = () => {
  return (
    <Container title="insertHtmlBefore">
      <h1>insertHtmlBefore</h1>
      <p className="desc">Insert given HTML before an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);"
        }
      />
    </Container>
  );
};

export default InsertHTMLBefore;
