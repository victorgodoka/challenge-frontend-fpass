import { useRef } from "react";
import { Container, Button, Checkbox, Input, SearchWrapper } from "./search-form.styles";
import { useNavigate } from "react-router-dom";

const SearchForm = (props: ISearch) => {
  const navigate = useNavigate();
  const inputSearch = useRef<HTMLInputElement>(null);
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const searchHero = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(form.current!);
    const heroName = formData.get('hero') as string;
    const useStartsWith = formData.get('namestartswith') === 'on';

    const urlParams = useStartsWith
      ? `nameStartsWith=${heroName}`
      : `name=${heroName}`

    return navigate(`/search/${encodeURIComponent(urlParams)}`)
  }

  return <Container>
    <SearchWrapper ref={form} onSubmit={searchHero}>
      <Checkbox>
        Busca pelo começo do nome
        <input ref={inputCheckbox} type="checkbox" name="namestartswith" id="namestartswith" />
        <span></span>
      </Checkbox>
      <Input ref={inputSearch} placeholder="Search a Hero by Marvel" type="text" name="hero" id="hero" />
      <Button type="submit">Search</Button>
    </SearchWrapper>
  </Container>
}

export default SearchForm;
