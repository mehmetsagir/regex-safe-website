import PageContent from "src/components/PageContent";

const Number = () => {
  return (
    <PageContent
      title="Number"
      placeholder="Enter an number"
      code={{
        el: "isNum",
        regex: "/^[1-9]d*$/g",
        value: "num",
      }}
      exampleCode={
        "import { isNum } from 'regex-safe'; \n\nisNum(4); // 'true'\nisNum('mehmet'); // 'false'"
      }
    />
  );
};

export default Number;
