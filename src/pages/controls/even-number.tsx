import PageContent from "src/components/PageContent";

const EvenNumber = () => (
  <PageContent
    title="Even Number"
    placeholder="Enter an even number"
    code={{
      el: "isEven",
      regex: "/^-?d*[02468]$/g",
      value: "num",
    }}
    exampleCode={
      "import { isEven } from 'regex-safe'; \n\nisEven('2'); // 'true'\nisEven(1); // 'false'"
    }
  />
);

export default EvenNumber;
