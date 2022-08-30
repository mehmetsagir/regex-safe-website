import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Wrap = () => {
  return (
    <Container title="Wrap">
      <h1>wrap</h1>
      <p className="desc">Wrap a number between two values</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const wrap = (num, min, max) => ((((num - min) % (max - min)) + (max - min)) % (max - min)) + min;"
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
            code={"wrap(11, 10, 25); // 11"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Wrap;
