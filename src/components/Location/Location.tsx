import s from '../Character/Character.module.css'
import React from "react";

const Location: React.FC<PropsType> = ({ content }) => {
    const { name, type, dimension} = content;

    return (
        <div className={ s.ListItem }>
            <h3>{ name }</h3>
            <p>
                <span className="title">Type</span>
                { type }
            </p>
            <p>
                <span className="title">Dimension</span>
                { dimension }
            </p>
        </div>
    )
}

type PropsType = {
    content: ContentType
};
type ContentType = {
    name: string,
    type: string,
    dimension: string,
}

export default Location;
