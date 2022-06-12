import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetConsecutiveArrays = () => {
  return (
    <Container title="Get Consecutive Arrays">
      <h1>getConsecutiveArrays</h1>
      <p className="desc">Get all arrays of consecutive elements</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getConsecutiveArrays = (arr, size) => size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));"
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
              "getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default GetConsecutiveArrays;
