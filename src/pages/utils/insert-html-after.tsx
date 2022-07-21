import Container from "src/components/Container";
import Editor from "src/components/Editor";

const InsertHTMLAfter = () => {
  return (
    <Container title="insertHtmlAfter">
      <h1>insertHtmlAfter</h1>
      <p className="desc">Insert given HTML after an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);"
        }
      />
    </Container>
  );
};

export default InsertHTMLAfter;
