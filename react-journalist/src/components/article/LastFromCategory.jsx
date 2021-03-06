import React, { Component } from 'react';
import ArticleApiService from "../../service/ArticleApiService";

class LastFromCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {},
            authors: []
        };

        this.reloadArticle = this.reloadArticle.bind(this);
    }

    componentDidMount() {
        this.reloadArticle();
    }

     reloadArticle() {
        ArticleApiService.fetchLatestInCat(this.props.catid)
            .then(res => {
                const article = res.data;
                this.setState({ article });

                // get article's authors
                ArticleApiService.fetchArticleAuthors(article.articleid)
                    .then(res => {
                        this.setState({ authors:res.data._embedded.authors });
                    });
            });
    }

    render() {
        return (
            <div className="categoryarticle">
                <h5><a href={"/categories/"+this.props.catid}>{this.props.category} »</a></h5>
                <div style={{width:"100%", height:"200px", backgroundColor:"#ddd"}}>
                    <a href={"/articles/"+this.state.article.articleid}>
                        <img className="thumbnail" src={this.state.article.image}/>
                    </a>
                </div>
                <a href={"/articles/"+this.state.article.articleid}><h4>{this.state.article.title}</h4></a>
                by&nbsp;
                {
                    this.state.authors.map(
                        author => <a href={author._links.self.href.substring(21)}>{author.name}</a>,)
                }
                <br/>
                {this.state.article.summary}
                <br/><br/>
            </div>
        );
    }
}

export default LastFromCategory;