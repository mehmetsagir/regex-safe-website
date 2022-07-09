// @ts-ignore
import { getTimezone } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const GetTimezone = () => {
  return (
    <Container title="Get Timezone">
      <h1>getTimezone</h1>
      <p className="desc">Get the timezone string</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;"
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
            code={"getTimezone(); // Europe/Istanbul"}
          />
          <p
            style={{
              marginTop: 24,
              color: "#ccc",
              opacity: 0.6,
            }}
          >
            Current: {getTimezone()}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default GetTimezone;
