import React, {useEffect, useState} from "react";
import {dataService} from "../../service";
import {useDispatch, useSelector} from "react-redux";
import Character from "../Character/Character";
import {Link} from "react-router-dom";
import './Characters.css'
import Filter from "../FilterCharacters/FilterCharacters";
import {filter_characters} from "../../Redux/actions";


const Characters = () => {

    const [showBtn, setShowBtn] = useState(true);
    const characters = useSelector(({characters}) => characters);
    const nextPageCharacters = useSelector(({nextPageCharacters}) => nextPageCharacters);
    const dispatch = useDispatch();

    const getData = async () => {
        const response = await new dataService().getCharacters(nextPageCharacters, dispatch);

        if (nextPageCharacters === null) {
            setShowBtn(
                false
            )
        }
    }

    useEffect(() => {
        if (characters.length) {
            return
        }
        getData();
    }, []);

    const showMore = async () => nextPageCharacters ? getData() : setShowBtn(false)
    const filter = e => dispatch(filter_characters(e));


    return (
        <div className='List-Container'>
            <Filter filter={filter}/>
            <div className="List-Grid">
                {
                    characters && characters.map(character => (
                        <Link to={'/characters/' + character.id} key={character.id}>
                            <Character content={character}/>
                        </Link>
                    ))
                }
            </div>
            {
                showBtn && <button onClick={showMore}>Show more</button>
            }
        </div>
    )
}

export default Characters;
