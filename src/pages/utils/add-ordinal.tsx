import Container from "src/components/Container";
import Editor from "src/components/Editor";

const AddOrdinal = () => {
  return (
    <Container title="Add Ordinal">
      <h1>addOrdinal</h1>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const addOrdinal = (n) => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;"
        }
      />
    </Container>
  );
};

export default AddOrdinal;
