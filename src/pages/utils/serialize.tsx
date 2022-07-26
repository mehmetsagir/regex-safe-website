import Container from "src/components/Container";
import Editor from "src/components/Editor";

const Serialize = () => {
  return (
    <Container title="Serialize">
      <h1>serialize</h1>
      <p className="desc">Serialize form data</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const serialize = (formEle) => Array.from(new FormData(formEle)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }), {});"
        }
      />
    </Container>
  );
};

export default Serialize;
