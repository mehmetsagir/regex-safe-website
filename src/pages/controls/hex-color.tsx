import PageContent from "src/components/PageContent";

const HexColor = () => (
  <PageContent
    title="Hex Color"
    placeholder="Enter an hex color"
    code={{
      el: "isHexColor",
      regex: "/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/",
      value: "color",
    }}
    exampleCode={
      "import { isHexColor } from 'regex-safe'; \n\nisHexColor('#000'); // 'true'\nisHexColor('000'); // 'false'"
    }
  />
);

export default HexColor;
