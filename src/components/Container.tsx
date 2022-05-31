import Head from "next/head";
import styled from "styled-components";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledContainer>
      <Head>
        <title>{`${title} |`} Regex Safe</title>
      </Head>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  h1 {
    font-weight: 300;
    letter-spacing: 1px;
  }
  .desc {
    margin-top: 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  h4 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .example {
    margin-top: 20px;
    h5 {
      font-size: 16px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 4px;
    }
    textarea,
    input {
      width: 100%;
      resize: none;
      background: ${({ theme }) => theme.colors.bg};
      border: ${({ theme }) => theme.colors.textSecondary};
      color: ${({ theme }) => theme.colors.text};
      font-family: inherit;
      padding: 6px 10px;
      border-radius: 4px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    input {
      height: 40px;
    }
    button {
      background: ${({ theme }) => theme.colors.bg};
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textSecondary};
      padding: 4px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .check-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;
    }
    .output {
      margin-top: 14px;
    }
  }
`;

export default Container;
