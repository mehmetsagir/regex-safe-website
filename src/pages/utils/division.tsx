import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Division = () => {
  return (
    <Container title="Division">
      <h1>division</h1>
      <p className="desc">Calculate the division of arguments</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const division = (...args) => args.reduce((a, b) => a / b);"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"division(1, 2, 3, 4); // 0.04166666666666666"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Division;
