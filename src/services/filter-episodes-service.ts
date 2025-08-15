import { repositoryPodcast } from "../repositories/podcast-repository";

export const serviceListEpisodes = async (podcastName: string) => {

    const data = await repositoryPodcast(podcastName);

    return data;

}