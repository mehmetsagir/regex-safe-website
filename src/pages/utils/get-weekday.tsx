// @ts-ignore
import { getWeekday } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetWeekday = () => {
  return (
    <Container title="Get Week Day">
      <h1>getWeekday</h1>
      <p className="desc">Get the weekday of a date</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getWeekday = (date) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];"
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
            code={"getWeekday(new Date()); // sunday"}
          />
        </div>
        <p
          style={{
            marginTop: 24,
            color: "#ccc",
            opacity: 0.6,
          }}
        >
          Today: {getWeekday(new Date())}
        </p>
      </div>
    </Container>
  );
};

export default GetWeekday;
