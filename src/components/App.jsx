import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api/fetch';



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

  // state = {
  //   name: '',
  //   data: [],
  //   showModal: false,
  //   largeUrl: null,
  //   alt: null,
  //   loading: false,
  //   perPage: 12,
  //   page: 1,
  //   buttonVisial: false,
  // };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.perPage !== prevState.perPage) {
//       this.setState({ loading: true });
      
//       fetchImages(this.state.name, this.state.perPage)
//         .then(data => {this.setState({ data: [...this.state.data, ...data.hits] });
//       }).catch(error => {console.log('error :>> ', error)})
//         .finally(() => {
//           // this.setState({ buttonVisial: true });
//           this.setState({ loading: false });
//         });
//       // this.setState({ loading: false });
//     }
    
//     if (this.state.name !== prevState.name) {
//       this.setState({ perPage: 12 });
//       this.setState({ loading: true });

//       fetchImages(this.state.name, this.state.perPage)
//         .then(dataarray => {this.setState({ data: [...this.state.data, ...dataarray.hits] });
//         }).catch(error => {console.log('error :>> ', error)})
//         .finally(() => {
//           this.setState({ buttonVisial: true });
//           this.setState({ loading: false });
//         });
//     }
// }
  useEffect(() => {
    if (page !== 1 && perPage === 12) {
      setLoading(true);
       fetchImages(name, perPage)
        .then(data => {setData(data => [...data, ...data.hits]);
      }).catch(error => {console.log('error :>> ', error)})
        .finally(() => {
          setLoading(false);
        });
      return;
    }
      
      if (name !== '') {
        setPerPage(12);
        setLoading(true);
        fetchImages(name, perPage)
        .then(dataarray => {setData(data => [...data, ...dataarray.hits]);
        }).catch(error => {console.log('error :>> ', error)})
        .finally(() => {
          setButtonVisial(true);
          setLoading(false);
        });
        return;
    }  
     
  }, [name, perPage, page, data]);
  
  // useEffect(() => {
  //   if (page !== 1) {
  //     setLoading(true);
  //     fetchImages(name, page)
  //     .then(data => {
  //       setData(responseData);
  //       setButtonVisial(true);
  //       })
  //       .catch(console.log)
  //       .finally(() => setLoading(false));
  //   }
  // }, [name, page]);

//   async function fetchImages() {
//     setLoading(true);
//   const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
//   const BASE_URL = "https://pixabay.com/api/";
//     try {
//   const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`);
//   const responseData = await response.data.hits;
    
//       setData(responseData);
// } catch (error) {
//         console.log(error);
//     };
//     setLoading(false);
//     setButtonVisial(true);
//   };
  
// useEffect(() => {
//     if (!name) {
//       return;
//   };
//   fetchImages()
// }, [perPage, name])

  
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

