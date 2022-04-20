import PageContent from "src/components/PageContent";

const URL = () => {
  return (
    <PageContent
      title="Name"
      placeholder="Enter your name"
      description="Requires first and last name."
      code={{
        el: "isName",
        regex:
          "/^[A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]+(s([A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]{2,})){1,3}$/i",
        value: "name",
      }}
      exampleCode={
        "import { isName } from 'regex-safe'; \n\nisName('Mehmet Sağır'); // 'true'\nisName('Mehmet'); // 'false'"
      }
    />
  );
};

export default URL;
