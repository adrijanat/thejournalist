import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ListArticleElement from "../article/ListArticleElement";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q:'',
            articles : [],
            message: null
        };
        this.reloadArticles = this.reloadArticles.bind(this);
    }

    componentDidMount() {
        this.reloadArticles();
    }

    reloadArticles() {
        const query = new URLSearchParams(this.props.location.search);
        this.q = query.get('q');

        axios.get('http://localhost:8080/articles?q='+this.q)
            .then(res => {
                const articles = res.data;
                this.setState({ articles });
            })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Search results for "{this.q}"</h1>
                <br/>
                {(this.state.articles.length == 0 || this.q=='')
                    ? <h2>No results found</h2>
                    : <div>
                        <h2>ARTICLES ({this.state.articles.length})</h2>
                        <br/>
                        { this.state.articles.map(
                            article =>
                                <ListArticleElement article={article}/>
                                )
                        }
                    </div>
                }

            </div>
        )
    }
}

export default Search;


