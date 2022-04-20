// @ts-nocheck
import { useState } from "react";
import { isName } from "regex-safe";
import Container from "src/components/Container";
import Editor from "src/components/Editor";

const URL = () => {
  const [value, setValue] = useState("");

  return (
    <Container title="Name">
      <h1>isName</h1>
      <p className="desc">Requires first and last name.</p>
      <h4>Code</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "const isName = (name) => {\n  const regex = /^[A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]+(s([A-Za-zÇÖÜçöüĞğİıŞşЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё]{2,})){1,3}$/i \n  return regex.test(name);\n};"
        }
      />
      <h4>Example Usage</h4>
      <Editor
        style={{
          marginTop: 12,
        }}
        language="jsx"
        code={
          "import { isName } from 'regex-safe'; \n\nisName('Mehmet Sağır'); // 'true'\nisName('Mehmet'); // 'false'"
        }
      />
      <div className="example">
        <div className="input">
          <h5>Input</h5>
          <input
            type="text"
            placeholder="Enter url"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className="output">
          <h5>Output</h5>
          {String(isName(value))}
        </div>
      </div>
    </Container>
  );
};

export default URL;
