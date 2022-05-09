import PageContent from "src/components/PageContent";

const HTMLTags = () => (
  <PageContent
    title="HTML Tags"
    placeholder="Enter an HTML code snippet"
    code={{
      el: "isHTMLTags",
      regex: "/^<([a-z1-6]+)([^<]+)*(?:>(.*)<\\/1>| *\\/>)$/",
      value: "html",
    }}
    exampleCode={
      "import { isHTMLTags } from 'regex-safe'; \n\nisHTMLTags('<h1>Mehmet</h1>'); // 'true'\nisHTMLTags('Mehmet'); // 'false'"
    }
  />
);

export default HTMLTags;
