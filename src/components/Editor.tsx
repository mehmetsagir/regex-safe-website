// @ts-nocheck
import "@uiw/react-textarea-code-editor/dist.css";

import dynamic from "next/dynamic";
import React, { HTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";

const CodeEditor = dynamic<any>(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  {
    ssr: false,
  }
);

type Props = {
  code: string;
  language?: string;
  style?: HTMLAttributes<HTMLDivElement>["style"];
  disabled?: boolean;
  noCopy?: boolean;
  props?: any;
} & HTMLAttributes<HTMLElement>;

const Editor: React.FC<Props> = ({
  code,
  language,
  style,
  disabled = true,
  noCopy = false,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", "dark");
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Container>
      {!noCopy && (
        <button onClick={handleCopy} className={isCopied ? "copied" : ""}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      )}
      <CodeEditor
        value={code}
        language={language}
        padding={15}
        disabled={disabled}
        style={{
          fontSize: 14,
          borderRadius: 4,
          backgroundColor: "#121212",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          lineHeight: 1.5,
          ...style,
        }}
        {...props}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  &:hover button {
    opacity: 1;
  }
  button {
    position: absolute;
    top: 11.5px;
    right: 10px;
    border-radius: 3px;
    padding: 4px 8px;
    opacity: 0;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
    z-index: 1;
    transition: 250ms;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
    &.copied {
      opacity: 1;
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

export default Editor;
