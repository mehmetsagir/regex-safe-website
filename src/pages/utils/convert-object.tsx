import Container from "src/components/Container";
import Editor from "src/components/Editor";

const ConvertObject = () => {
  return (
    <Container title="Convert Object">
      <h1>convertObject</h1>
      {<p className="desc">Convert to Object from Array.</p>}
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const convertObject = (arr, key) => {
  return Object.fromEntries(
    arr.map((item, index) => [item[key] || index, item])
  );
};`}
      />
    </Container>
  );
};

export default ConvertObject;
