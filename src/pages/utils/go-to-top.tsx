import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GoToTop = () => {
  return (
    <Container title="Go to Top">
      <h1>goToTop</h1>
      <p className="desc">Scroll to top of the page</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const goToTop = () => window.scrollTo(0, 0);"}
      />
    </Container>
  );
};

export default GoToTop;
