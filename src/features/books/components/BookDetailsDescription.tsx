import React from "react";

interface BookDescriptionProps {
    description?: string
}

const BookDetailsDescription = (props: BookDescriptionProps) => {

    const demoText = () => {
        return <div className="flex flex-col gap-y-5  pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pharetra dui.
                Fusce vitae viverra lectus. Morbi auctor id velit in condimentum. In velit mauris,
                pharetra
                eget urna egestas, pellentesque convallis libero.
            </p>
            <p>Fusce ut dui magna. Curabitur consectetur nulla purus, in ornare ex condimentum vitae.
                Nam
                mattis mi ipsum, quis interdum lectus hendrerit vitae. Nulla tincidunt sed urna sit amet
                consequat.
                Pellentesque euismod euismod vulputate. Quisque ultrices ornare ornare. Curabitur et
                interdum quam. Proin facilisis ligula ligula. Fusce ac ipsum eros. Duis auctor gravida
                sapien, sit amet feugiat ex aliquet et.
            </p>
        </div>
    }

    return (
        props.description != null ?
            <div className="flex flex-col gap-y-5 pt-5">
                {props.description}
            </div> :
            demoText()
    );
}

export default BookDetailsDescription;