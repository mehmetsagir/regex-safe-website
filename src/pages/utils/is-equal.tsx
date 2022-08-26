import Container from "src/components/Container";
import Editor from "src/components/Editor";

const IsEqual = () => {
  return (
    <Container title="IsEqual">
      <h1>isEqual</h1>
      <p className="desc">Check if multiple objects are equal</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));"
        }
      />
      <div className="example">
        <div>
          <h4>Example</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"isEqual({ foo: 'bar' }, { foo: 'bar' }); // true"}
          />
        </div>
      </div>
    </Container>
  );
};

export default IsEqual;
