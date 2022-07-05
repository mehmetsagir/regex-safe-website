import Container from "src/components/Container";
import Editor from "src/components/Editor";

const DayOfYear = () => {
  return (
    <Container title="dayOfYear">
      <h1>dayOfYear</h1>
      <p className="desc">Get the day of the year from a date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));"
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
            code={"dayOfYear(new Date(2020, 04, 16)); // 137"}
          />
        </div>
      </div>
    </Container>
  );
};

export default DayOfYear;
