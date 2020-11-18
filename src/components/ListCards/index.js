import Item from "./components/Item";

function ListCards({ data, onClick }) {
  return (
    <ul>
      <Item data={data} onClick={onClick} />
    </ul>
  );
}

export default ListCards;
