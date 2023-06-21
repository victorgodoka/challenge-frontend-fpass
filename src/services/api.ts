async function getHero(id: number) {
  return fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=fb28b331bf78a20f56af78519e0bdae5`)
    .then((res) => res.json());
}

async function getHeroes() {
  return fetch(`https://gateway.marvel.com/v1/public/characters?apikey=fb28b331bf78a20f56af78519e0bdae5`)
    .then((res) => res.json());
}
async function getHeroesSearch(urlParams: string, page?: number) {
  const url = !page
    ? `https://gateway.marvel.com/v1/public/characters?apikey=fb28b331bf78a20f56af78519e0bdae5&${urlParams}`
    : `https://gateway.marvel.com/v1/public/characters?apikey=fb28b331bf78a20f56af78519e0bdae5&${urlParams}&offset=${
        20 * (+page! - 1)
      }`;
  return fetch(url).then((res) => res.json());
}

async function getHeroesPage(page: number) {
  return fetch(`https://gateway.marvel.com/v1/public/characters?apikey=fb28b331bf78a20f56af78519e0bdae5&offset=${20* (+page-1)}`)
    .then((res) => res.json());
}

export async function heroesLoader() {
  const { data } = await getHeroes();
  return { data };
}

export async function heroesPageLoader({ params }: any) {
  const { data } = await getHeroesPage(params?.page);
  return { data };
}

export async function heroesSearchLoader({ params }: any) {
  const { data } = await getHeroesSearch(params?.urlParams, params?.page);
  return { data };
}

export async function heroLoader({ params }: any) {
  const { data } = await getHero(params?.heroid);
  return { hero: data?.results[0] };
}
