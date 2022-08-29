import Container from "src/components/Container";
import Editor from "src/components/Editor";

const ToFixed = () => {
  return (
    <Container title="to Fixed">
      <h1>toFixed</h1>
      <p className="desc">
        Truncate a number to a given number of decimal places without rounding
      </p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:.\\d{0,${fixed}})?`))[0];"
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
            code={"toFixed(25.198726354, 1); // 25.1"}
          />
        </div>
      </div>
    </Container>
  );
};

export default ToFixed;
