import { VideoSnippetType } from '../components/video_list/index';
import  { AxiosInstance } from 'axios';
 
export class Youtube {
    private youtube : AxiosInstance;

    constructor(httpClient: AxiosInstance) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25
            }
        });
        return response.data.items;
    }

    async search(query:string) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items?.map((item:VideoSnippetType) => ({...item, id: item.id.videoId}));
    }
}