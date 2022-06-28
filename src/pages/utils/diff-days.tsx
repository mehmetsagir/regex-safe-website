import Container from "src/components/Container";
import Editor from "src/components/Editor";

const DiffDays = () => {
  return (
    <Container title="Diff Days">
      <h1>diffDays</h1>
      <p className="desc">
        Calculate the number of difference days between two dates
      </p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));"
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
              "diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default DiffDays;
