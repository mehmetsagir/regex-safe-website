import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Transpose = () => {
  return (
    <Container title="Transpose">
      <h1>transpose</h1>
      <p className="desc">Swap the rows and columns of a matrix</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));"
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
              "transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9] ]) // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ]])"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Transpose;
