import PageContent from "src/components/PageContent";

const OddNumber = () => (
  <PageContent
    title="Odd Number"
    placeholder="Enter an odd number"
    code={{
      el: "isOdd",
      regex: "/^-?d*[13579]$/g",
      value: "num",
    }}
    exampleCode={
      "import { isOdd } from 'regex-safe'; \n\nisOdd('1'); // 'true'\nisOdd(2); // 'false'"
    }
  />
);

export default OddNumber;
