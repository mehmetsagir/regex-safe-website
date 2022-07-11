import Container from "src/components/Container";
import Editor from "src/components/Editor";

const SortDescending = () => {
  return (
    <Container title="Sort Descending">
      <h1>sortDescending</h1>
      <p className="desc">Sort an array of dates</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());"
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
              "sortDescending([new Date('2019-01-03'), new Date('2019-01-01')]); // [new Date('2019-01-03'), new Date('2019-01-01')]"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default SortDescending;
