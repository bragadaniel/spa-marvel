import { useState, useEffect } from "react";
import { Layout, ListCards, Modal, Pagination } from "../../components";
import { findData } from "../../utils/findData";
import { charactersApi } from "../../common/characters";

const dataMenu = {
  name: "Daniel O. Braga",
  src: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
  titleImage: "Daniel O. Braga",
};

function Home() {
  const [data, setData] = useState({ data: [], pagination: null })
  const [toggleModal, setToggleModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
    charactersApi
      .findCharacters()
      .then((resp) => {
        return setData(resp)
      })
      .catch(err => console.error(err))
  }, [])

  const handleOpenModal = (evt) => {
    evt.preventDefault();
    const {
      currentTarget: { id },
    } = evt;
    const found = findData(data.data, id);
    setToggleModal(true);
    setDataModal(...found);
  };

  const handleCloseModal = () => setToggleModal(false);
  return (
    <Layout dataMenu={dataMenu}>
      <ListCards data={data.data} onClick={handleOpenModal} />
      <Pagination showFirstButton showLastButton {...data.pagination} />
      {toggleModal && <Modal closeModal={handleCloseModal} data={dataModal} />}
    </Layout>
  );
}

export default Home;
