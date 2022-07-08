import Container from "src/components/Container";
import Editor from "src/components/Editor";

const DaysInMonth = () => {
  return (
    <Container title="Days in Month">
      <h1>daysInMonth</h1>
      <p className="desc">Get the number of days in given month</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const daysInMonth = (month, year) => new Date(year, month, 0).getDate();"
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
            code={"daysInMonth(2020, 1); // 30"}
          />
        </div>
      </div>
    </Container>
  );
};

export default DaysInMonth;
