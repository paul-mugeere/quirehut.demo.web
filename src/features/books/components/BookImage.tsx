import Image from 'next/image'
import { ProductContext } from '../types/Book.types';
import { ImagePlaceholder } from '@/features/shared/components/imagePlaceholder';

export interface BookImageProps {
    title: string;
    coverImageUrl: string;
    context: ProductContext
}

const BookImage = ({title, coverImageUrl, context}: Partial<BookImageProps>) => {
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

    const defaultContext = ProductContext.ProductCard;
    const {width, height} = getProductImageSize(context ?? defaultContext);
    return coverImageUrl ? <Image src={coverImageUrl} alt={`Cover of ${title}`} width={width} height={height}/> :
        <ImagePlaceholder width={width} height={height}/>
}

export default BookImage;