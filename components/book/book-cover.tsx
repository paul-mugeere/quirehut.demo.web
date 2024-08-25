import Image from 'next/image'
import BookCoverContext from '@/types/bookcover-context'
import { ImagePlaceholder } from '../placeholders';

interface BookCoverProps {
    title: string;
    imgUrl: string;
    context: BookCoverContext
}
const BookCover = ({ title, imgUrl, context }: Partial<BookCoverProps>) => {

    const getBookSize = (context: BookCoverContext) => {
        switch (context) {
            case BookCoverContext.BookDetails:
                return { width: 300, height: 400 };
            case BookCoverContext.BookCard:
                return { width: 150, height: 200 };
            default:
                return { width: 300, height: 400 };
        }
    };

    let defautContext = BookCoverContext.BookCard;
    const { width, height } = getBookSize(context ?? defautContext);
    return imgUrl ? <Image src={imgUrl} alt={`Cover of ${title}`} width={width} height={height} /> : <ImagePlaceholder width={width} height={height} />
}

export default BookCover;