import PageContent from "src/components/PageContent";

const RemoveHTMLTags = () => (
  <PageContent
    title="Remove HTML Tags"
    description="Returns the text by deleting the html tags from the given value."
    placeholder="Enter HTML codes."
    code={{
      el: "removeHTMLTags",
      regex: "/<[^>]*>/g",
      value: "str",
    }}
    exampleCode={
      "import { removeHTMLTags } from 'regex-safe'; \n\nconst text = '<p>Hello World</p>'; \nconst result = removeHTMLTags(text); \n\nconsole.log(result); // 'Hello World'"
    }
  />
);

export default RemoveHTMLTags;
