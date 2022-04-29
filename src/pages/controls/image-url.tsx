import PageContent from "src/components/PageContent";

const ImageURL = () => (
  <PageContent
    title="Image URL"
    placeholder="Enter an image url"
    code={{
      el: "isImageURL",
      regex: "/(http(s?):)([/|.|w|s|-])*.(?:jpe?g|gif|png|webp)$/",
      value: "url",
    }}
    exampleCode={
      "import { isImageURL } from 'regex-safe'; \n\nisImageURL('https://mehmetsagir.vercel.app/wallpaper/10.webp'); // 'true'\nisImageURL('https://mehmetsagir.vercel.app/wallpaper/10'); // 'false'"
    }
  />
);

export default ImageURL;
