import PropTypes from 'prop-types';
import { GalleryList, GalleryImage} from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({items}) => {
    return (
        items.map(item => (
        <GalleryList key={item.id}>
           <GalleryImage
                id={item.id}
                src={item.webformatURL}
                alt={item.tags}
               />
        </GalleryList>
    ))
)
}

ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}



