import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { apiFetchImages } from 'api/fetch';



export const App = () => {

  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeUrl, setLargeUrl] = useState(null);
  const [alt, setAlt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [buttonVisial, setButtonVisial] = useState(false);

  
  useEffect(() => {
     if (!name) {
      return;
    }

    const fetchImages = () => {
      setLoading(true);

      apiFetchImages({ query: name, page })
        .then(newdata => {
          setData(prevData => [...prevData, ...newdata]);
        })
        .catch(error => console.log('error :>> ', error))
        .finally(() => {
          setLoading(false);
          setButtonVisial(true)
        })
    };

    fetchImages();
  }, [name, page]);


   useEffect(() => {
    if (!name) {
      return;
    }
    setData(prevData=>[]);
  }, [name]);
  
  
  const onFormSubmit = (data) => {
    setName(data);
    setPerPage(12);
  };

  const toggleModal = () => {
    setShowModal(!showModal)
  };
  
  const modalItems = (dataFind) => {
    setLargeUrl(dataFind.largeImageURL);
    setAlt(dataFind.tags);
  };

  const loadMoreClick = () => {
    setPerPage(perPage + data);
    setPage(page + 1);
  };
  

    return (
    <AppStyled>
        <GlobalStyle />

        <Searchbar onSubmit={onFormSubmit}/>
        {loading && <Loader />}
        <ImageGallery data={data} modalItems={modalItems} toggleModal={() => { toggleModal() }}/>
        {(buttonVisial && (data.length>0)) && <Button click={loadMoreClick} />}
        {showModal && <Modal onClick={()=> {toggleModal()}} src={largeUrl} alt={alt} />}
      
    </AppStyled>
  );
  
};

