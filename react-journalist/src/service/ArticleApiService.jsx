import axios from 'axios';

const BASE = 'http://localhost:8080/articles/';

class ApiService {

    fetchArticleAuthors(id){
        return axios.get(BASE + id + "/authors");
    }

    fetchArticleCategory(id){
        return axios.get(BASE + id + "/category");
    }

    fetchArticleComments(id){
        return axios.get(BASE + id + "/comments");
    }

    fetchArticleKeywords(id){
        return axios.get(BASE + id + "/keywords");
    }

    fetchArticleStories(id){
        return axios.get(BASE + id + "/stories");
    }

    fetchLatestInCat(catid) {
        return axios.get(BASE + "latestincat/" + catid);
    }

    // latest / most viewed / most upvoted
    fetchPick(pick) {
        return axios.get(BASE + pick);
    }
}

export default new ApiService();