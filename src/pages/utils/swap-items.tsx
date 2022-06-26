import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Union = () => {
  return (
    <Container title="Swap Items">
      <h1>swapItems</h1>
      <p className="desc">Swap two array items</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const swapItems = (a, i, j) => (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;"
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
            code={"swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Union;
