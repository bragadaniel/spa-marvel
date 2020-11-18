import Page from "./components/Page";
import "./styles.css";

function Pagination({ data }) {
  if (!data || data.total <= 10) {
    return null;
  }
  return (
    <ul className="pagination">
      <Page data={data} />
    </ul>
  );
}

export default Pagination;
