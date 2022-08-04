import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Factorial = () => {
  return (
    <Container title="Factorial">
      <h1>factorial</h1>
      <p className="desc">Calculate the factorial of a number</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));"}
      />
      <div className="example">
        <div>
          <h4>Example Usage</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={"factorial(4); // 24"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Factorial;
