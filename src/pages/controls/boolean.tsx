import PageContent from "src/components/PageContent";

const Email = () => (
  <PageContent
    title="Boolean"
    placeholder="Enter an boolean value"
    code={{
      el: "isBoolean",
      regex: "/^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$/",
      value: "val",
    }}
    exampleCode={
      "import { isBoolean } from 'regex-safe'; \n\nisBoolean('false'); // 'true'\nisBoolean('test'); // 'false'"
    }
  />
);

export default Email;
