import Container from "src/components/Container";
import Editor from "src/components/Editor";

const ToChars = () => {
  return (
    <Container title="toChars">
      <h1>toChars</h1>
      <p className="desc">Convert a number to equivalent characters</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const toChars = (n) => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;"
        }
      />
    </Container>
  );
};

export default ToChars;
