import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Fibo = () => {
  return (
    <Container title="Fibo">
      <h1>Fibo</h1>
      <p className="desc">Calculate Fibonacci numbers</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const fibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));"
        }
      />
    </Container>
  );
};

export default Fibo;
