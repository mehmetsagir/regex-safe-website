import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Average = () => {
  return (
    <Container title="Average">
      <h1>average</h1>
      <p className="desc">Calculate the average of arguments</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const average = (...args) => args.reduce((a, b) => a + b) / args.length;"
        }
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"average(1, 2, 3, 4); // 2.5"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Average;
