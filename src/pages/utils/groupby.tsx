import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GroupBy = () => {
  return (
    <Container title="groupBy">
      <h1>groupBy</h1>
      <p className="desc">Group an array of objects by a key</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});"
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
              "const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'John' }];\n\nconst grouped = groupBy(data, 'name'); \n{ 'John': [{ id: 1, name: 'John' }, { id: 3, name: 'John' }], \n'Jane': [{ id: 2, name: 'Jane' }] }"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default GroupBy;
