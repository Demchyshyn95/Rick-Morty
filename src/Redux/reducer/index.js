import {
    FILTER_CHARACTERS,
    FILTER_EPISODE,
    FILTER_LOCATIONS,
    GET_CHARACTERS,
    GET_EPISODES,
    GET_LOCATIONS
} from "../actions_types";


const initialState = {
    characters: [],
    episode: [],
    locations: [],
    filterCharacters:[],
    filterEpisode:[],
    filterLocations:[],
    nextPageCharacters:'',
    nextPageLocation:'',
    nextPageEpisode:'',
}

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {

        case GET_CHARACTERS: {
            const characters = [...state.filterCharacters];
            const { results } = actions.payload;
            const { next } = actions.payload;

             results.forEach(el =>{
                characters.push(el);
            })
            return {...state, characters: characters, filterCharacters: characters, nextPageCharacters: next}
        }

        case GET_EPISODES: {
            const episode = [...state.filterEpisode];
            const { results } = actions.payload;
            const { next } = actions.payload;

            results.forEach(el =>{
                episode.push(el);
            })
            return { ...state, episode: episode, filterEpisode : episode, nextPageEpisode: next }
        }

        case GET_LOCATIONS: {
            const locations = [...state.filterLocations];
            const { results } = actions.payload;
            const { next } = actions.payload;

            results.forEach(el =>{
                locations.push(el);
            })
            return { ...state, locations: locations, filterLocations : locations, nextPageLocation: next }
        }

        case FILTER_CHARACTERS:{
            const characters = [...state.filterCharacters];
            const {name,status,gender,species} = actions.payload;
            const newArray = characters
                .filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
                .filter((el)=>{
                    if(status === 'all'){
                        return el;
                    }
                    return el.status === status;
                })
                .filter((el)=>{
                    if(gender === 'all'){
                        return el;
                    }
                    return el.gender === gender;
                })
                .filter((el)=>{
                    if(species === 'all'){
                        return el;
                    }
                    return el.species === species;
                })
            return { ...state, characters:newArray }
        }


        case FILTER_EPISODE:{
            const episodes = [...state.filterEpisode];
            const {name, episode,} = actions.payload;
            const newArray = episodes
                .filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
                .filter(el => el.episode.toLowerCase().includes(episode.toLowerCase()))

            return { ...state,episode:newArray }
        }

        case FILTER_LOCATIONS:{
            const locations = [...state.filterLocations];
            const { name ,type, dimension } = actions.payload;
            const newArray = locations
                .filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
                .filter((el)=>{
                    if(type === 'all'){
                        return el;
                    }
                    return el.type === type;
                })
                .filter((el)=>{
                    if(dimension === 'all'){
                        return el;
                    }
                    return el.dimension === dimension;
                })

            return { ...state, locations:newArray }
        }

        default:
            return state;
    }
}
