import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetMonthName = () => {
  return (
    <Container title="getMonthName">
      <h1>getMonthName</h1>
      <p className="desc">Get the month name of a date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getMonthName = (date) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()];"
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
            code={"getMonthName(new Date()); // July"}
          />
        </div>
      </div>
    </Container>
  );
};

export default GetMonthName;
