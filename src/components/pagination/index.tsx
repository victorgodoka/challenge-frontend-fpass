import { Link } from "react-router-dom";
import { PaginationWrapper } from "./pagination.styles";

const Pagination = ({ total, count, url }: IPagination) => {
  const totalPages = Math.ceil(total / 20);
  const current = Math.ceil(count / 20);

  return <PaginationWrapper>
    {[...Array(totalPages)].map((_, i) => <li className={(i + 1) === current ? "current" : ""} key={i}><Link to={`${url}/page/${i + 1}`}>{i + 1}</Link></li>)}
  </PaginationWrapper>
}

export default Pagination;
