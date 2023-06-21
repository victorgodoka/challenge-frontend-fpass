import { useLoaderData, useLocation } from "react-router-dom";
import Comic from "../components/comic";
import Pagination from "../components/pagination";
import { Main } from "../components/comic/comics.styles";

export default function Heroes() {
  const { data } = useLoaderData() as any;
  const { total, count, results } = data as Data;
  const location = useLocation();

  return <>
    <Main>
      <Comic data={results?.map(({ name, thumbnail: { path, extension }, id }, i) => ({
        id,
        text: [name],
        position: [i % 2 ? 'bottom-right' : 'top-left'],
        thumbnail: path + '.' + extension
      }))} />
    </Main>

    <Pagination
      total={total}
      count={count}
      url={location.pathname.split("/page/")[0]}
    />
  </>
}
