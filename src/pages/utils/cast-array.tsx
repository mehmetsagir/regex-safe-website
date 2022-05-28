import Container from "src/components/Container";
import Editor from "src/components/Editor";

const CastArray = () => {
  return (
    <Container title="Cast Array">
      <h1>castArray</h1>
      {<p className="desc">Returns the value as an array.</p>}
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const castArray = (value) => {
  return Array.isArray(value) ? value : [value];
};`}
      />
    </Container>
  );
};

export default CastArray;
