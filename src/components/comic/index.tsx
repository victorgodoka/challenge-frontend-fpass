import { useNavigate } from "react-router-dom";
import { ComicWrapper, Panel, ComicText, Thumbnail } from "./comics.styles";

const Comic = ({ data }: { data: IComic[] }) => {
  const navigate = useNavigate();

  return <ComicWrapper>
    {data && data.map(({ text, position, thumbnail, id }, i) => <Panel onClick={() => navigate(`/hero/${id.toString()}`)} key={i}>
      <Thumbnail thumbnail={thumbnail} />
      {(text && position) && (text.length > 1 && position.length > 1)
        ? text.map((txt, i) => <ComicText className={position[i]}>{txt}</ComicText>)
        : <ComicText className={position![0]}>{text}</ComicText>
      }
    </Panel>)}
  </ComicWrapper>
}

export default Comic;