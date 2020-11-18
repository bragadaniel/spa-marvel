import { useState } from "react";
// import { useEffect } from "react";
// import { getCharacters } from "../../services/endpoints/characters";
import { Layout, ListCards, Modal, Pagination } from "../../components";

import { findData } from "../../utils/findData";

const data = [
  {
    id: 1017100,
    name: "1- A-Bomb (HAS)",
    titleImage: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    modified: "2013-09-18T15:54:04-0400",
    src: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      extension: "jpg",
    },
  },
  {
    id: 20174100,
    name: "2- A-Bomb (HAS)",
    titleImage: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    modified: "2013-09-18T15:54:04-0400",
    src: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      extension: "jpg",
    },
  },
  {
    id: 30117100,
    name: "3- A-Bomb (HAS)",
    titleImage: "A-Bomb (HAS)",
    description:
      "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    modified: "2013-09-18T15:54:04-0400",
    src: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      extension: "jpg",
    },
  },
];

const dataMenu = {
  name: "Daniel O. Braga",
  src: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
  titleImage: "Daniel O. Braga",
};

const pagination = {
  offset: 0,
  limit: 10,
  total: 1230,
  count: 10,
};

function Home() {
  // useEffect(() => {
  //   getCharacters({ limit: 10, offset: 0 }).then((resp) => console.log(resp));
  // }, []);
  const [toggleModal, setToggleModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleOpenModal = (evt) => {
    evt.preventDefault();
    const {
      currentTarget: { id },
    } = evt;
    const found = findData(data, id);
    setToggleModal(true);
    setDataModal(...found);
  };

  const handleCloseModal = () => setToggleModal(false);

  console.log("STATE", dataModal);
  console.log("toggleModal", toggleModal);
  return (
    <Layout dataMenu={dataMenu}>
      <ListCards data={data} onClick={handleOpenModal} />
      <Pagination data={pagination} />
      {toggleModal && <Modal closeModal={handleCloseModal} data={dataModal} />}
    </Layout>
  );
}

export default Home;
