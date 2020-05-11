import React, { Component } from 'react';
import ArticleApiService from "../../service/ArticleApiService";

class ListStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naslov : '',
            articles : [],
            message: null
        };
        this.reloadArticles = this.reloadArticles.bind(this);
    }

    componentDidMount() {
        this.reloadArticles();
        var naslov;
        switch(this.props.naslov) {
            case 'latest': {
                naslov = 'Latest news';
                this.setState({naslov});
                break;
            }
            case 'mostupvoted': {
                naslov = 'Most upvoted';
                this.setState({naslov});
                break;
            }
            case 'mostviewed': {
                naslov = 'Most viewed';
                this.setState({naslov});
                break;
            }
            default : {
                naslov = 'Most';
                this.setState({naslov});
            }
        }
    }

    reloadArticles() {
        ArticleApiService.fetchPick(this.props.naslov)
            .then(res => {
                this.setState({ articles:res.data });
            })
    }

    render() {
        return (
            <div className="liststats">
                <h4>{this.state.naslov}</h4>
                <ol>
                    {
                        this.state.articles.map(
                            article =>
                                <li key={article.articleid}>
                                    <a href={"/articles/"+article.articleid}>{article.title}</a>
                                </li>
                        )
                    }
                </ol>
            </div>
        );
    }
}

export default ListStats;