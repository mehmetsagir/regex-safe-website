// @ts-nocheck
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const PageContent = () => (
  <Container title="External Regex">
    <h1>isRegex</h1>
    <h4>Code</h4>
    <Editor
      style={{
        marginTop: 12,
      }}
      language="jsx"
      code={
        "const isRegex = (value, regex) => {\n  if (typeof regex !== 'object') return false;\n  return regex.test(value);\n};"
      }
    />
    <h4>Example Usage</h4>
    <Editor
      style={{
        marginTop: 12,
      }}
      language="jsx"
      code={
        "import { isRegex } from 'regex-safe';\n\nisRegex('mehmetsagirdev@gmail.com', /^[w-.]+@([w-]+.)+[w-]{2,4}$/g)}; // true"
      }
    />
  </Container>
);

export default PageContent;
