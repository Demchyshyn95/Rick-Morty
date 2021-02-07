import {
    FILTER_CHARACTERS, FILTER_EPISODE, FILTER_LOCATIONS,
    GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS,
} from "../actions_types";

export const get_characters = (payload) => ({ type:GET_CHARACTERS,payload });
export const get_episodes = (payload) => ({ type:GET_EPISODES,payload });
export const get_locations = (payload) => ({ type:GET_LOCATIONS,payload });
export const filter_characters = (payload) => ({ type:FILTER_CHARACTERS,payload});
export const filter_episode = (payload) => ({ type:FILTER_EPISODE,payload});
export const filter_locations = (payload) => ({ type:FILTER_LOCATIONS,payload});
