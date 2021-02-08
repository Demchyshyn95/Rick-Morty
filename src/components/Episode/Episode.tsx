import React from "react";

const Episode: React.FC<Props> = ({ content}) => {
    const {name, air_date, episode} = content;

    return (
        <div className="List-Item">
            <h3>{name}</h3>
            <p>
                <span className="title">Air Date</span>
                {air_date}
            </p>
            <p>
                <span className="title">Episode</span>
                {episode}
            </p>
        </div>
    )
}

type Props = {
    content: ContentType
};
type ContentType = {
    name: string,
    air_date: string,
    episode: string,
}

export default Episode;
