import { useState } from "react";
import { range } from "../../../utils/range";
import "../styles.css";

function ArrowLeftPrev({ onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>{`<`}</button>
    </li>
  );
}

function ArrowRightNext({ onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>{`>`}</button>
    </li>
  );
}

function ArrowLeftFirst({ onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>{`<<`}</button>
    </li>
  );
}

function ArrowRightLast({ onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>{`>>`}</button>
    </li>
  );
}

function Items({ start, totalPages, active, onClick }) {
  let calc = totalPages - start + 1;
  let totalFactory = range(start, calc);

  return totalFactory.map((item, idx) => (
    <li key={idx.toString()}>
      <button
        className={active === item ? "active" : "disabled"}
        id={item}
        type="button"
        onFocus={(evt) => onClick(evt, item)}
      >
        {item}
      </button>
    </li>
  ));
}

function Page({ data: { total, limit } }) {
  const [totalPages, setTotalPages] = useState(limit);
  const [start, setStart] = useState(1);
  const [active, setActive] = useState(1);

  const currentPage = (e, item) => {
    if (e.target.id === String(item)) {
      return setActive(item);
    }
  };

  const nextPage = () => {
    if (totalPages >= total) {
      return null;
    }
    setTotalPages(totalPages + 1);
    setStart(start + 1);
  };

  const prevPage = () => {
    if (totalPages <= 10) {
      return null;
    }
    setTotalPages(totalPages - 1);
    setStart(start - 1);
  };

  const lastPage = () => {
    setTotalPages(total);
    setStart(total - limit);
  };

  const firstPage = () => {
    if (totalPages <= 10) {
      return null;
    }
    setTotalPages(limit);
    setStart(1);
  };

  return (
    <div className="paginationItem">
      <ArrowLeftFirst onClick={firstPage} />
      <ArrowLeftPrev onClick={prevPage} />
      <Items
        totalPages={totalPages}
        start={start}
        onClick={currentPage}
        active={active}
      />
      <ArrowRightNext onClick={nextPage} />
      <ArrowRightLast onClick={lastPage} />
    </div>
  );
}

export default Page;
