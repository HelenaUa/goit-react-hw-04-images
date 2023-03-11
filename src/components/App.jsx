import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import fetchImages from 'api/fetch';


export class App extends Component {

  state = {
    name: '',
    data: [],
    showModal: false,
    largeUrl: null,
    alt: null,
    loading: false,
    perPage: 12,
    page: 1,
    buttonVisial: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.perPage !== prevState.perPage) {
      this.setState({ loading: true });
      
      fetchImages(this.state.name, this.state.perPage)
        .then(data => {this.setState({ data: [...this.state.data, ...data.hits] });
      }).catch(error => {console.log('error :>> ', error)})
        .finally(() => {
          // this.setState({ buttonVisial: true });
          this.setState({ loading: false });
        });
      // this.setState({ loading: false });  
    }
    
    if (this.state.name !== prevState.name) {
      this.setState({ perPage: 12 });
      this.setState({ loading: true });

      fetchImages(this.state.name, this.state.perPage)
        .then(dataarray => {this.setState({ data: [...this.state.data, ...dataarray.hits] });
        }).catch(error => {console.log('error :>> ', error)})
        .finally(() => {
          this.setState({ buttonVisial: true });
          this.setState({ loading: false });
        });
    } 
}

  onFormSubmit = (data) => {
    this.setState({name: data})
  }

  toggleModal = () =>
    this.setState(({ showModal }) => ({
    showModal: !showModal
  }))
  
  modalItems = (dataFind) => {
    this.setState({
      largeUrl: dataFind.largeImageURL,
      alt: dataFind.tags,
  })
  }

  loadMoreClick = () => {
    this.setState(prevState => ({  perPage: prevState.perPage + 1 }));
  };
  

  render() {

    return (
    <AppStyled>
        <GlobalStyle />

        <Searchbar onSubmit={this.onFormSubmit}/>
        {this.state.loading && <Loader />}
        <ImageGallery data={this.state.data} modalItems={this.modalItems} toggleModal={() => { this.toggleModal() }}/>
        {(this.state.buttonVisial && (this.state.data.length>0)) && <Button click={this.loadMoreClick} />}
        {this.state.showModal && <Modal onClick={()=> {this.toggleModal()}} src={this.state.largeUrl} alt={this.state.alt} />}
      
    </AppStyled>
  );
  }
  
};

