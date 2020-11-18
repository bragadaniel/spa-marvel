import { Card, Link } from "../..";

function Item({ data, onClick }) {
  return data.map((item, idx) => (
    <li key={`${item.id}-${idx}`}>
      <Link id={item.id} onClick={onClick}>
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default Item;
