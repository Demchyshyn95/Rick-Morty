import {dataService} from "../../service";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Location from "../Location/Location";
import '../Characters/Characters.css'
import FilterLocations from "../FilterLocations/FilterLocations";
import { filter_locations } from "../../Redux/actions";


const Locations = () => {
    const [nextPage, setNextPage] = useState('');
    const [showBtn, setShowBtn] = useState(true);
        const locations = useSelector(({ locations }) => locations);
    const nextPageLocation = useSelector(({ nextPageLocation }) => nextPageLocation);
    const dispatch = useDispatch();

    const getLocation = async () => {
        const response = await new dataService().getLocations(nextPageLocation, dispatch)

        if (nextPageLocation === null) {
            setShowBtn(
                false
            )
        }
    }

    useEffect(() => {
        if (locations.length) {
            return
        }
        getLocation();
    }, []);


    const showMore = async () => nextPageLocation ? getLocation() : setShowBtn(false);
    const filter = e => dispatch(filter_locations(e));


    return (
        <div className='List-Container'>
            <FilterLocations filter={ filter }/>
            <div className="List-Grid">
                {
                    locations && locations.map(location => (
                        <Location content={ location } key={ location.id }/>
                    ))
                }
            </div>
            {
                showBtn && <button onClick={ showMore }>Show more</button>
            }
        </div>
    )
}

export default Locations;
