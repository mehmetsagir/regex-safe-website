import PageContent from "src/components/PageContent";

const IPv4 = () => (
  <PageContent
    title="IPv4"
    placeholder="Enter an IPv4 address"
    code={{
      el: "isIPv4",
      regex:
        "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/",
      value: "ip",
    }}
    exampleCode={
      "import { isIPv4 } from 'regex-safe'; \n\nisIPv4('01.102.103.104'); // 'true'\nisIPv4('01.102.103'); // 'false'"
    }
  />
);

export default IPv4;
