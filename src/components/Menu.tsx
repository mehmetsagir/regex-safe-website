import { useRouter } from "next/router";
import { rgba } from "polished";
import { useEffect, useState } from "react";
import datas from "src/db/menu.json";
import styled from "styled-components";

const Menu = () => {
  const { asPath } = useRouter();
  const [activePath, setActivePath] = useState<string>();

  useEffect(() => {
    setActivePath(asPath);
  }, [asPath]);

  return (
    <Container>
      {datas.map((data) => (
        <>
          <h6>{data.title}</h6>
          <div className="links">
            {data.links.map((link, index) => (
              <a
                href={link.path}
                onClick={() => setActivePath(link.path)}
                className={activePath === link.path ? "active" : ""}
                key={index}
              >
                {link.title}
              </a>
            ))}
          </div>
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 52px);
  overflow-y: auto;
  border-right: 1px solid ${(props) => rgba(props.theme.colors.secondary, 0.5)};
  padding-bottom: 24px;
  h6 {
    font-size: 24px;
    font-weight: 500;
    margin: 18px 16px 0 16px;
  }

  .links {
    padding: 4px 0;
    a {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 16px;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.5);
      transition: 250ms;

      &:hover,
      &.active {
        color: #fff;
      }
    }
  }
`;

export default Menu;
