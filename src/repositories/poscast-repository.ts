import fs from 'fs';
import path from 'path';

const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {

    const rawData = fs.readFileSync(pathData, 'utf-8');
    const jsonFile = JSON.parse(rawData);

    return jsonFile;
}