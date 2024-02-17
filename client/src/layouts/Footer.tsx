import { media } from "@theme/mediaQueries";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.lightWithOpacity(0.4)};
  margin-top: 40px;
  position: relative;
  z-index: 200;
  line-height: 2;

  @media ${media.screens.md} {
    justify-content: flex-end;
  }
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;

const FigmaTemplateLink = styled(Link)`
  color: ${(props) => props.theme.colors.accent};
`;

const AuthorLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;
`;

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        Based on{" "}
        <FigmaTemplateLink
          to={"https://www.figma.com/file/Bif5pAK3RSicCyKXGUDkYV"}
          target="_blank"
        >
          Figma template
        </FigmaTemplateLink>
        , implemented and extended by{" "}
        <AuthorLink to={"https://github.com/mhevyk"} target="_blank">
          Maksym Hevyk
        </AuthorLink>
        , 2023
      </Copyright>
    </FooterContainer>
  );
}
