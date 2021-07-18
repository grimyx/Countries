import React from "react"

const Field = ({ text, image, onClick }) => {
    return (
        <div onClick={onClick} class="field">
            <div className="flag-image">
                <img alt={text + "flag"} src={image} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Field;