import PageContent from "src/components/PageContent";

const Email = () => (
  <PageContent
    title="Email"
    placeholder="Enter an email"
    code={{
      el: "isEmail",
      regex: "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g",
      value: "email",
    }}
    exampleCode={
      "import { isEmail } from 'regex-safe'; \n\nisEmail('mehmetsagirdev@gmail.com'); // 'true'"
    }
  />
);

export default Email;
