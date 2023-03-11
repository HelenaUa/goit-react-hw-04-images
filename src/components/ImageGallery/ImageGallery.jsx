import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
  state = {
    data: [],
    name: ''
  };
    
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({data: this.props.data})
    }
  };
  
  galleryItemClick = (event) => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    const dataFind = this.state.data.find(items => items.id === Number(event.target.id))
    this.props.modalItems(dataFind);
    this.props.toggleModal();
  };
    
    render() {
        return (
            <div>
                {this.state.data !== null && <ImageGalleryUl onClick={this.galleryItemClick}>
                    <ImageGalleryItem items={this.state.data} />
                </ImageGalleryUl>}
            </div>   
        )
    }
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
}


