import {galleryData} from '../../data';
import './ImageGallery.css'; 

const ImageGallery = () => {
    return (
        <div className="gallery-container">
            {galleryData.map((image) => (
                <div key={image.id} className="gallery-item">
                    <img src={image.src} alt={image.title} />
                    
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;