import Image from 'next/image'
import {ImagePlaceholderProps} from "./ImagePlaceholder.types";

const ImagePlaceholder = ({ height, width }: ImagePlaceholderProps) => {
    return <Image src={`https://fakeimg.pl/${width}x${height}`} alt="place holder for a book cover" width={width} height={height} />
}

export default ImagePlaceholder;