import {dataService} from "../../service";
import {useEffect, useState} from "react";
import s from './singleCh.module.css'

const SingleCharacter = ({ match }) => {
    const [character, setCharacter] = useState('');
    const { params: { id } } = match;

    const getCharactersById = async () => {
        const {image,name,status,gender,species} = await await new dataService().getCharactersById(id);

                setCharacter({
                    image,name,status,gender,species
                })
    }
    useEffect(() => {
        getCharactersById();
    }, [])

    return (
        <div>
            { character &&
            <div>
                <div className={s.SingleInfoContainer}>
                    <div className={s.SingleInfo}>
                        <img src={character.image}/>
                        <div className={s.SingleInfoText}>
                            <h2>{character.name}</h2>
                            <p>
                                <span className="title">Gender</span>
                                {character.gender}
                            </p>
                            <p>
                                <span className="title">Species</span>
                                {character.species}
                            </p>
                            <p>
                                <span className="title">Status</span>
                                {character.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default SingleCharacter;
