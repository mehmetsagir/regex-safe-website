import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetIntersection = () => {
  return (
    <Container title="Get Intersection">
      <h1>getIntersection</h1>
      <p className="desc">Get the intersection of arrays</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));"
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
            code={"getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]"}
          />
        </div>
      </div>
    </Container>
  );
};

export default GetIntersection;
