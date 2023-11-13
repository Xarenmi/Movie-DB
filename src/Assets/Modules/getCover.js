import { posterBaseUrl } from "./dataKeys.js";
export const getCover = movie => {
    return `${posterBaseUrl}${movie.poster_path}`;
}