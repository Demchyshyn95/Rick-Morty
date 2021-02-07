import {get_characters, get_episodes, get_locations} from "../Redux/actions";

export class dataService {

    async getCharacters(url, dispatch) {
        try {
            const newUrl = url ? url : 'https://rickandmortyapi.com/api/character';
            const response = await fetch(newUrl);
            const { info:{ next }, results} = await response.json();

            dispatch(get_characters({results, next}));

        } catch (e) {
            console.log(e);
        }
    }

    async getCharactersById(id) {
        try {
            const url = `https://rickandmortyapi.com/api/character/${id}`;
            const response = await fetch(url);
            const result = await response.json();
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    async getLocations(url, dispatch) {
        try {
            const newUrl = url ? url : 'https://rickandmortyapi.com/api/location';
            const response = await fetch(newUrl);
            const { info:{ next }, results} = await response.json();

            dispatch(get_locations({ results, next }));
        } catch (e) {
            console.log(e);
        }
    }

    async getEpisodes(url, dispatch) {
        try {
            const newUrl = url ? url : 'https://rickandmortyapi.com/api/episode';
            const response = await fetch(newUrl);
            const { info:{ next }, results} = await response.json();

            dispatch(get_episodes({ results, next }));
        } catch (e) {
            console.log(e);
        }
    }
}
