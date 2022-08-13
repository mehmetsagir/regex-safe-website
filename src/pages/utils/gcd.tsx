import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GCD = () => {
  return (
    <Container title="GCD">
      <h1>gcd</h1>
      <p className="desc">
        Compute the greatest common divisor between two numbers
      </p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={"const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));"}
      />
    </Container>
  );
};

export default GCD;
