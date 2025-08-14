import { repositoryPodcast } from "../repositories/poscast-repository";




export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
}