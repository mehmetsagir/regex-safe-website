import PageContent from "src/components/PageContent";

const URL = () => (
  <PageContent
    title="URL"
    placeholder="Enter an URL"
    code={{
      el: "isURL",
      regex:
        "/^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$/g",
      value: "url",
    }}
    exampleCode={
      "import { isURL } from 'regex-safe'; \n\nisURL('https://mehmetsagir.dev'); // 'true'\nisURL('https://mehmetsagir'); // 'false'"
    }
  />
);

export default URL;
