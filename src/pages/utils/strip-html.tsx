import Container from "src/components/Container";
import Editor from "src/components/Editor";

const StripHtml = () => {
  return (
    <Container title="stripHtml">
      <h1>stripHtml</h1>
      <p className="desc">Strip HTML from a given text</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';"
        }
      />
    </Container>
  );
};

export default StripHtml;
