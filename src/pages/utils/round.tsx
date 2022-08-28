import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Round = () => {
  return (
    <Container title="Round">
      <h1>round</h1>
      <p className="desc">Round a number to a given number of digits</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);"
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
            code={"round(1.234567, 3); // 1.235"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Round;
