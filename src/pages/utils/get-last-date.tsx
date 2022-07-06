import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetLastDate = () => {
  return (
    <Container title="getLastDate">
      <h1>getLastDate</h1>
      <p className="desc">Get the last date in the month of a date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0);"
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
              "getLastDate(new Date('2020-01-01')); // 2020-01-30T21:00:00.000Z"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default GetLastDate;
