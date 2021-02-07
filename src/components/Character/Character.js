import s from './Character.module.css'

const Character = ({ content }) => {
    const { name, image, species, origin, location, status, gender } = content;

    return (

        <div className="List-Item">
            <img alt={ name } src={ image } style={{ position: 'relative', left: '-8%', width: '300px' }}/>

            <h3>{ content.name }</h3>
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
export default Character;
