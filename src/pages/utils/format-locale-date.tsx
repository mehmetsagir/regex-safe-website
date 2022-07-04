import Container from "src/components/Container";
import Editor from "src/components/Editor";

const FormatLocaleDate = () => {
  return (
    <Container title="Format Locale Date">
      <h1>formatLocaleDate</h1>
      <p className="desc">Format a date for the given locale</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const formatLocaleDate = (date, locale) => new Intl.DateTimeFormat(locale).format(date);"
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
            code={"formatLocaleDate(new Date(), 'tr-TR'); // 06.05.2020"}
          />
        </div>
      </div>
    </Container>
  );
};

export default FormatLocaleDate;
