import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Toggle = () => {
  return (
    <Container title="Toggle">
      <h1>toggle</h1>
      <p className="desc">Toggle an element</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const toggle = (ele) => (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');"
        }
      />
    </Container>
  );
};

export default Toggle;
