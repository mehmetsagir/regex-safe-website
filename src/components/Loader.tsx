import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <div className="loader">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;

  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.textSecondary};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
      &:nth-child(1) {
        left: 8px;
        animation: loader1 0.6s infinite;
      }
      &:nth-child(2) {
        left: 8px;
        animation: loader2 0.6s infinite;
      }
      &:nth-child(3) {
        left: 32px;
        animation: loader2 0.6s infinite;
      }
      &:nth-child(4) {
        left: 56px;
        animation: loader3 0.6s infinite;
      }
    }
  }

  @keyframes loader1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loader3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes loader2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default Loader;
