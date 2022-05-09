import PageContent from "src/components/PageContent";

const HexColor = () => (
  <PageContent
    title="Integer Number"
    placeholder="Enter an integer number"
    code={{
      el: "isInteger",
      regex: "/^-?d+$/gim",
      value: "num",
    }}
    exampleCode={
      "import { isInteger } from 'regex-safe'; \n\nisInteger('1'); // 'true'\nisInteger('2.4'); // 'false'"
    }
  />
);

export default HexColor;
