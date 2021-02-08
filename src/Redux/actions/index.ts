import {
    FILTER_CHARACTERS, FILTER_EPISODE, FILTER_LOCATIONS,
    GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS,
} from "../actions_types";


type GetCharactersActionPayloadType = {
     results: Array<any>,
    next: string
}
type GetCharactersActionType = {
    type: typeof GET_CHARACTERS,
    payload: GetCharactersActionPayloadType
}
export const get_characters = (payload: GetCharactersActionPayloadType): GetCharactersActionType => ({ type:GET_CHARACTERS,payload });


type GetEpisodeActionPayloadType = {
    results: Array<any>,
    next: string
}
type GetEpisodeActionType = {
    type: typeof GET_EPISODES,
    payload: GetEpisodeActionPayloadType
}
export const get_episodes = (payload: GetEpisodeActionPayloadType): GetEpisodeActionType => ({ type:GET_EPISODES,payload });


type GetLocationsActionPayloadType = {
    results: Array<any>,
    next: string
}
type GetLocationsActionType = {
    type: typeof GET_LOCATIONS,
    payload: GetLocationsActionPayloadType
}
export const get_locations = (payload: GetLocationsActionPayloadType): GetLocationsActionType => ({ type:GET_LOCATIONS,payload });


type FilterCharactersActionPayloadType = {
    name: string,
    status: string,
    gender: string,
    species: string,
}
type FilterCharactersActionType = {
    type: typeof FILTER_CHARACTERS,
    payload: FilterCharactersActionPayloadType
}
export const filterCharacters = (payload: FilterCharactersActionPayloadType): FilterCharactersActionType => ({ type:FILTER_CHARACTERS,payload});


type FilterEpisodeActionPayloadType = {
    name: string,
    episode: string,
}

type FilterEpisodeActionType = {
    type: typeof FILTER_EPISODE,
    payload: FilterEpisodeActionPayloadType
}
export const filterEpisode = (payload: FilterEpisodeActionPayloadType): FilterEpisodeActionType => ({ type:FILTER_EPISODE,payload});


type FilterLocationsActionPayloadType = {
    name: string,
    episode: string,
    dimension: string
}

type FilterLocationsActionType = {
    type: typeof FILTER_LOCATIONS,
    payload: FilterLocationsActionPayloadType
}
export const filterLocations = (payload: FilterLocationsActionPayloadType): FilterLocationsActionType => ({ type:FILTER_LOCATIONS,payload});
