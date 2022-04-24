import PageContent from "src/components/PageContent";

const Slug = () => (
  <PageContent
    title="Slug"
    placeholder="Enter a slug"
    code={{
      el: "isSlug",
      regex: "/^[a-z0-9]+(?:-[a-z0-9]+)*$/gim",
      value: "val",
    }}
    exampleCode={
      "import { isSlug } from 'regex-safe'; \n\nisSlug('mehmet-sagir'); // 'true'\nisSlug('mehmet-'); // 'false'"
    }
  />
);

export default Slug;
