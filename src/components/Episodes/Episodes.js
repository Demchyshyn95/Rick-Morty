import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dataService} from "../../service";
import Episode from "../Episode/Episode";
import FilterEpisode from "../FilterEpisode/FilterEpisode";
import {filterEpisode} from "../../Redux/actions";

const Episodes = () => {
    const [showBtn, setShowBtn] = useState(true);
    const episode = useSelector(({episode}) => episode);
    const nextPageEpisode = useSelector(({nextPageEpisode}) => nextPageEpisode);
    const dispatch = useDispatch();


    const getEpisode = async () => {
        const response = await new dataService().getEpisodes(nextPageEpisode, dispatch);

        if (nextPageEpisode === null) {
            setShowBtn(
                false
            )
        }
    }

    useEffect(() => {
        if (episode.length) {
            return
        }
        getEpisode();
    }, []);

    const showMore = async () => nextPageEpisode ? getEpisode() : setShowBtn(false);
    const filter = e => dispatch(filterEpisode(e));


    return (
        <div className='List-Container'>
            <FilterEpisode filter={ filter }/>
            <div className="List-Grid">
                {
                    episode && episode.map(episode => (
                        <Episode content={episode} key={episode.id}/>
                    ))
                }
            </div>
            {
                showBtn && <button onClick={showMore}>Show more</button>
            }
        </div>
    )
}

export default Episodes;
