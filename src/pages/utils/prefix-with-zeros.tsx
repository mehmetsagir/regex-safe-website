import Container from "src/components/Container";
import Editor from "src/components/Editor";

const PrefixWithZeros = () => {
  return (
    <Container title="Prefix with Zeros">
      <h1>prefixWithZeros</h1>
      <p className="desc">Prefix an integer with zeros</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const prefixWithZeros = (n, length) => (n / Math.pow(10, length)).toFixed(length).substr(2);"
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
            code={"prefixWithZeros(42, 5); // '00042'"}
          />
        </div>
      </div>
    </Container>
  );
};

export default PrefixWithZeros;
