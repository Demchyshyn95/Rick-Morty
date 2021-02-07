import s from '../Character/Character.module.css'

const Location = ({ content }) => {
    const { name, type, dimension} = content;
    return (
        <div className={s.ListItem}>
            <h3>{name}</h3>
            <p>
                <span className="title">Type</span>
                {type}
            </p>
            <p>
                <span className="title">Dimension</span>
                {dimension}
            </p>
        </div>
    )
}

export default Location;
