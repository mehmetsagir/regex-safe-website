// @ts-nocheck
import { maxByArray } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const MaxByArray = () => {
  const values = [
    {
      name: "Max",
      age: 20,
    },
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
  ];

  return (
    <Container title="Max by Array">
      <h1>maxByArray</h1>
      {
        <p className="desc">
          Returns the item with the maximum value in an array based on the given
          key.
        </p>
      }
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const maxByArray = (arr, fn) => { return arr.reduce((a, b) => (a[fn] >= b[fn] ? a : b), {}); };"
        }
      />
      <div className="example">
        <div>
          <h4>Example Value</h4>
          <Editor
            style={{
              marginTop: 12,
            }}
            language="jsx"
            code={
              "[ \n { name: 'Max', age: 20 }, \n { name: 'John', age: 30 }, \n { name: 'Jane', age: 25 } \n]"
            }
          />
        </div>
        {!!maxByArray(values, "age") && (
          <div className="output">
            <h5>Output</h5>
            <span>{`Name: ${maxByArray(values, "age")?.name}`}</span>
            <span
              style={{
                display: "block",
                marginTop: 4,
              }}
            >{`Age: ${maxByArray(values, "age")?.age}`}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MaxByArray;
