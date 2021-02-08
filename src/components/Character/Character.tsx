import React from 'react';
import s from './Character.module.css';


const Character: React.FC<Props> = ({ content}) => {
      const {name, image, species, origin, location, status, gender} = content;
    return (

        <div className="List-Item">
            <img alt={ name } src={ image } style={{ position: 'relative', left: '-8%', width: '300px' }}/>

            <h3>{ name }</h3>
            <p>
                <span className="title">Species</span>
                { species }
            </p>
            <p>
                <span className="title">Origin</span>
                { origin.name }
            </p>
            <p>
                <span className="title">Location</span>
                { location.name }
            </p>
            <p>
                <span className="title">Status</span>
                { status }
            </p>
            <p>
                <span className="title">Gender</span>
                { gender }
            </p>
        </div>
    )
}

type Props = {
    content:ContentType
};
type ContentType = {
    name: string,
    image: any,
    species: string,
    origin: any,
    location: any,
    gender: string,
    status:string
}

export default Character;
