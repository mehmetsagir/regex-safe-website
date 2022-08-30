import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Truncate = () => {
  return (
    <Container title="Truncate">
      <h1>truncate</h1>
      <p className="desc">Truncate a number at decimal</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const truncate = (n) => ~~n;"}
      />
      <div className="example">
        <div>
          <h4>Example</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"truncate(25.198726354); // 25"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Truncate;
