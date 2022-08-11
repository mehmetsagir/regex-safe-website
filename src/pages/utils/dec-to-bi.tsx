import Container from "src/components/Container";
import Editor from "src/components/Editor";

const DecToBi = () => {
  return (
    <Container title="decToBi">
      <h1>decToBi</h1>
      <p className="desc">Convert decimal to binary recursively</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const decToBi = (num) => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));"
        }
      />
    </Container>
  );
};

export default DecToBi;
