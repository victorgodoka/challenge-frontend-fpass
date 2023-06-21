import { Form, useLoaderData } from "react-router-dom";
import Comic from "../components/comic";
import { ComicText, ComicHero, ComicImage } from "../components/comic/comics.styles";

export default function Hero () {
  const { hero } = useLoaderData() as { hero : Result};

  return <ComicHero>
    <ComicImage src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name} />
    <ComicText className="name">{hero.name}</ComicText>
    {hero.description && <ComicText className="description">{hero.description}</ComicText>}
  </ComicHero>;
}
