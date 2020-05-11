import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ApiService from "../../service/ApiService";

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            authors: []
        };
    }

    componentDidMount() {
        // get articles
        ApiService.fetchAll("articles")
            .then(res => {
                this.setState({articles:res.data});
            });

        // get authors
        ApiService.fetchAll("authors")
            .then(res => {
                this.setState({authors:res.data});
            });
    }

    render() {
        return (
            <div>
                Articles ({this.state.articles.length})
                <ul>
                    {this.state.articles.map(
                        article => <li key={article.articleid}>{article.articleid} {article.title}</li>
                    )}
                </ul>
                <br/>
                Authors ({this.state.authors.length})
                <ul>
                    {this.state.authors.map(
                        author => <li key={author.authorid}>{author.authorid} {author.name}</li>
                    )}
                </ul>

            </div>
        )
    }
}
export default Homepage;


