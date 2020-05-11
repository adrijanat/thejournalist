import React, { Component } from 'react';
import PostComment from "../comment/PostComment";
import ApiService from "../../service/ApiService";
import ArticleApiService from "../../service/ArticleApiService";

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article : {},
            authors : [],
            comments : [],
            keywords : [],
            category : '',
            message: null
        };
        this.reloadArticle = this.reloadArticle.bind(this);
    }

    componentDidMount() {
        this.reloadArticle();
    }

    reloadArticle() {

        // get article
        ApiService.fetchById("articles",this.props.match.params.id)
            .then(res => {
                this.setState({ article:res.data });
            });

        // get article's authors
            ArticleApiService.fetchArticleAuthors(this.props.match.params.id)
            .then(res => {
                this.setState({ authors:res.data._embedded.authors });
            });

        // get article's comments
        ArticleApiService.fetchArticleComments(this.props.match.params.id)
            .then(res => {
                this.setState({ comments:res.data._embedded.comments });
            });

        // get article's keywords
        ArticleApiService.fetchArticleKeywords(this.props.match.params.id)
            .then(res => {
                this.setState({ keywords:res.data._embedded.keywords });
            });

        // get article's category
        ArticleApiService.fetchArticleCategory(this.props.match.params.id)
            .then(res => {
                this.setState({ category:res.data.name });
            });
    }

    render() {
        return (
            <div className="row viewarticle">
                <div className="col-md-12">
                    <h3 className="category">{this.state.category}</h3>
                    <h2>{this.state.article.title}</h2>
                    <p>
                        by { this.state.authors.map(author => <a href={author._links.self.href.substring(21)}>{author.name}</a>,) }
                        &nbsp; | {new Date(this.state.article.datelastmodified).toUTCString()}
                    </p>
                    <i>{this.state.article.summary}</i>
                    <br/><br/>
                    <img style={{width:"100%"}} src={this.state.article.image}/>
                    <br/><br/>
                    <div style={{whiteSpace:"pre-line"}}>
                        {this.state.article.body}
                    </div>
                    <br/>
                    {(this.state.keywords.length == 0)
                        ? <br/>
                        : <div>
                            <h3 style={{display:"inline"}}>In this article: </h3>
                            {this.state.keywords.map(keyword => <span className="badge badge-pill"> {keyword.name} </span> )}</div>
                    }

                    <hr/>

                    <PostComment/>
                    <br/>

                    <h3>COMMENTS ({this.state.comments.length})</h3>
                    <table className="table table-borderless">
                        <tbody>
                        { this.state.comments.map(
                            comment =>
                                <tr key={comment.commentid}>
                                    <td>
                                        <u>{comment.name}</u> on {new Date(comment.datecreated).toUTCString()}
                                        <br/>
                                        {comment.body}
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ViewArticle;