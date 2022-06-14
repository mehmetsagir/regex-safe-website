import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetNthItems = () => {
  return (
    <Container title="Get n-th Items">
      <h1>getNthItems</h1>
      <p className="desc">Get all n-th items of an array</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);"
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
            code={
              "getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default GetNthItems;
