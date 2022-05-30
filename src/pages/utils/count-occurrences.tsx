import Container from "src/components/Container";
import Editor from "src/components/Editor";

const CountOccurrences = () => {
  return (
    <Container title="Count Occurrences">
      <h1>countOccurrences</h1>
      {
        <p className="desc">
          Returns the number of repetitions of the value you sent in the array
          you have.
        </p>
      }
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={`const countOccurrences = (arr, val) => {
  return arr.reduce(
    (a, v) =>
      String(v).toLowerCase() === String(val).toLowerCase() ? a + 1 : a,
    0
  );
};`}
      />
    </Container>
  );
};

export default CountOccurrences;
