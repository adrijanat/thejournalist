import axios from 'axios';

const BASE = 'http://localhost:8080/';
const BASE_A = 'http://localhost:8080/articles/';

class ApiService {

    fetchArticleAuthors(id){
        return axios.get(BASE_A + id + "/authors");
    }

    fetchArticleCategory(id){
        return axios.get(BASE_A + id + "/category");
    }

    fetchArticlesByCategory(catid){
        return axios.get(BASE + "categories/" + catid + "/articles");
    }

    fetchArticleComments(id){
        return axios.get(BASE_A + id + "/comments");
    }

    fetchArticleKeywords(id){
        return axios.get(BASE_A + id + "/keywords");
    }

    fetchArticleStories(id){
        return axios.get(BASE_A + id + "/stories");
    }

    fetchLatestInCat(catid) {
        return axios.get(BASE_A + "latestincat/" + catid);
    }

    // latest / most viewed / most upvoted
    fetchPick(pick) {
        return axios.get(BASE_A + pick);
    }


    addComment(articleid, commentid){
        //return axios.post(BASE_A + articleid + "/comments", BASE + "comments/" + commentid);

        return axios.post(
            BASE_A + articleid + "/comments",
            BASE + "comments/" + commentid,
            {headers: {"Content-Type": "text/uri-list"}}
        )
    }

    addAuthors(articleid, authorids){
        for(const authorid in authorids) {
            //return axios.post(BASE_A + articleid + "/authors", BASE + "authors/" + authorid);
            return axios.post(
                BASE_A + articleid + "/authors",
                BASE + "authors/" + authorid,
                {headers: {"Content-Type": "text/uri-list"}}
            )
        }
    }

    addKeywords(articleid, keywordids){
        for(const keywordid in keywordids) {
            //return axios.post(BASE_A + articleid + "/keywords", BASE + "keywords/" + keywordid);
            return axios.post(
                BASE_A + articleid + "/keywords",
                BASE + "keywords/" + keywordid,
                {headers: {"Content-Type": "text/uri-list"}}
            )
        }
    }

    addToCategory(categoryid, articleid){
        //return axios.post(BASE + "category/" + categoryid + "/articles", BASE_A + articleid);
        return axios.post(
            BASE + "categories/" + categoryid + "/articles",
            BASE_A + articleid,
            {headers: {"Content-Type": "text/uri-list"}}
        )
    }

    incrementUpvotes(articleid){
        return axios.post(BASE_A + articleid + "/upvote");
    }

    incrementViews(articleid){
        return axios.post(BASE_A + articleid + "/view");
    }
}

export default new ApiService();