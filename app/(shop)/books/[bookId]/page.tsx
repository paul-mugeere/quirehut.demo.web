import { BookCover } from '@/components/book'
import BookCoverContext from '@/types/bookcover-context'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full m-auto">
      <div className="grid grid-cols-3 gap-10">
        <div className="book-details col-span-2">
          <div className="w-full grid grid-cols-3 gap-10">
            <div className='w-full flex flex-col items-center col-span-1'>
              <BookCover context={BookCoverContext.BookDetails} ></BookCover>
            </div>
            <div className='w-full items-start col-span-2'>
              <div className='product-details-title'>
                <h1 className="text-2xl font-semibold">Sample title</h1>
                <h2 className="text-sm font-medium">Sample author</h2>
              </div>
              <div className='product-details-format text-sm font-medium'>
                <ul className='flex flex-row gap-x-2 mt-1'>
                  <li>2018 |</li>
                  <li>Hardcover |</li>
                  <li>English</li>
                </ul>
              </div>
              <div className='product-details-description flex flex-col gap-y-5 pt-5'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pharetra dui.
                  Fusce vitae viverra lectus. Morbi auctor id velit in condimentum. In velit mauris, pharetra eget urna egestas, pellentesque convallis libero.
                </p>
                <p>Fusce ut dui magna. Curabitur consectetur nulla purus, in ornare ex condimentum vitae. Nam mattis mi ipsum, quis interdum lectus hendrerit vitae. Nulla tincidunt sed urna sit amet consequat.
                  Pellentesque euismod euismod vulputate. Quisque ultrices ornare ornare. Curabitur et interdum quam. Proin facilisis ligula ligula. Fusce ac ipsum eros. Duis auctor gravida sapien, sit amet feugiat ex aliquet et.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="add-to-cart col-span-1 bg-qh-slate-50 rounded-md px-10">
          <h1 className="text-3xl font-bold">339,-</h1>
        </div>
      </div>
    </div>
  )
}