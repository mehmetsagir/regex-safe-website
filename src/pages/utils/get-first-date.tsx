import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetFirstDate = () => {
  return (
    <Container title="getFirstDate">
      <h1>getFirstDate</h1>
      <p className="desc">Get the first date in the month of a date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);"
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
              "getFirstDate(); // 2022-06-30T21:00:00.000Z\ngetFirstDat(new Date('2020-01-01')); // 2020-01-01T00:00:00.000Z"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default GetFirstDate;
