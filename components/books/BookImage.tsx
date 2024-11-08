import Image from 'next/image'
import {ProductContext, BookImageProps} from './Book.types'
import {ImagePlaceholder} from '../placeholders';

const BookImage = ({title, imgUrl, context}: Partial<BookImageProps>) => {
    const getProductImageSize = (context: ProductContext) => {
        switch (context) {
            case ProductContext.ProductDetails:
                return {width: 300, height: 400};
            case ProductContext.ProductCard:
                return {width: 150, height: 200};
            default:
                return {width: 300, height: 400};
        }
    };

    let defaultContext = ProductContext.ProductCard;
    const {width, height} = getProductImageSize(context ?? defaultContext);
    return imgUrl ? <Image src={imgUrl} alt={`Cover of ${title}`} width={width} height={height}/> :
        <ImagePlaceholder width={width} height={height}/>
}

export default BookImage;