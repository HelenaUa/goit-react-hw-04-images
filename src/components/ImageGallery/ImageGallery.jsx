import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({data, modalItems, toggleModal}) => {
  // state = {
  //   data: [],
  //   name: ''
  // };
    
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.data !== this.props.data) {
  //     this.setState({data: this.props.data})
  //   }
  // };

  // useEffect(() => { });
  
  const galleryItemClick = (event) => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    const dataFind = data.find(items => items.id === Number(event.target.id))
    modalItems(dataFind);
    toggleModal();
  };
    
  
        return (
            <div>
                {data !== null && <ImageGalleryUl onClick={galleryItemClick}>
                    <ImageGalleryItem items={data} />
                </ImageGalleryUl>}
            </div>   
        )
    
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
};


