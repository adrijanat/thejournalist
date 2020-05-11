import React, { Component } from 'react';
import ArticleApiService from "../../service/ArticleApiService";

class ListArticleElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : '',
            authors : []
        };
    }

    componentDidMount() {
        // get article's authors
        ArticleApiService.fetchArticleAuthors(this.props.article.articleid)
            .then(res => {
                this.setState({ authors:res.data._embedded.authors });
            });

        // get article's category
        ArticleApiService.fetchArticleCategory(this.props.article.articleid)
            .then(res => {
                this.setState({ category:res.data.name });
            });

    }

    render() {
        return (
            <div className="row listarticle" key={this.props.article.articleid}>
                <div className="col-md-4">
                    <a href={"/articles/"+this.props.article.articleid}>
                        <img className="thumbnail" src={this.props.article.image}/>
                    </a>
                </div>

                <div className="col-md-8">
                    <a href={"/articles/"+this.props.article.articleid}><h3>{this.props.article.title}</h3></a>
                    <p><span className="category">{this.state.category}</span> | by { this.state.authors.map(author => <a key={author.authorid} href={author._links.self.href.substring(21)}>{author.name}</a>,) } | {new Date(this.props.article.datelastmodified).toUTCString()}</p>
                    <p>{this.props.article.summary}</p>
                </div>
            </div>
        )
    }
}

export default ListArticleElement;