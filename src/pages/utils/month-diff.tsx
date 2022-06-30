import Container from "src/components/Container";
import Editor from "src/components/Editor";

const MonthDiff = () => {
  return (
    <Container title="Month Diff">
      <h1>monthDiff</h1>
      <p className="desc">Calculate the number of months between two dates</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());"
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
              "monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default MonthDiff;
