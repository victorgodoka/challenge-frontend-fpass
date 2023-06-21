import styled from "styled-components";

export const ComicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  font-family: "Comic Sans", cursive;
  padding: 1vmin;
`;

export const Panel = styled.div<IPanel>`
  cursor: pointer;
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 6px -6px #000;
  display: inline-block;
  flex: 1 1;
  height: 200px;
  margin: 1vmin;
  overflow: hidden;
  position: relative;
  max-width: ${(props) => (props.size === "xl" ? "400px" : "200px")};
  flex-basis: ${(props) => (props.size === "xl" ? "400px" : "200px")};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &:nth-child(4n + 1) {
    background-image: radial-gradient(circle, #ffd901, orange);
  }

  &:nth-child(4n + 2) {
    background-image: radial-gradient(circle, #0073be, #090095);
  }

  &:nth-child(4n + 3) {
    background-image: radial-gradient(circle, #feff03, #feff03);
  }

  &:nth-child(4n + 4) {
    background-image: radial-gradient(circle, #03d4ed, #df2e02);
  }
`;

export const ComicImage = styled.img`
  max-height: calc(100vh - 320px);
  max-width: 90vw;
  background-color: #fff;
  padding: 8px;
  border: solid 2px #000;
  transform: skew(3deg);
`;

export const ComicHero = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  margin: 32px auto;
`;

export const ComicText = styled.p`
  background-color: #fff;
  border: solid 2px #000;
  margin: 0;
  padding: 3px 10px;

  &.description {
    position: absolute;
    width: 75vw;
    max-width: 320px;
    transform: skew(-15deg);
    bottom: -40%;
    @media (min-width: 800px) {
      bottom: -50px;
      width: 320px;
      right: 19%;
    }
  }

  &.name {
    position: absolute;
    transform: skew(-15deg);
    top: -12px;
  }

  &.top-left {
    left: -6px;
    position: absolute;
    top: -2px;
    transform: skew(-15deg);
  }

  &.bottom-right {
    bottom: -2px;
    position: absolute;
    right: -6px;
    transform: skew(-15deg);
  }
`;

export const Thumbnail = styled.div<IThumbnail>`
  background: url(${(props) => props.thumbnail}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

export const Main = styled.main`
  width: 100%;
  padding: 12px;
  margin: 0 auto;
  max-width: 1280px;
`;