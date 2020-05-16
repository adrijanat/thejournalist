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
            views : '',
            upvotes : '',
            message: null
        };
        this.reloadArticle = this.reloadArticle.bind(this);
        this.view = this.view.bind(this);
        this.upvote = this.upvote.bind(this);
    }

    componentDidMount() {
        this.reloadArticle();
    }

    reloadArticle() {

        // get article
        ApiService.fetchById("articles",this.props.match.params.id)
            .then(res => {
                this.setState({ article:res.data });
                this.setState({ upvotes:res.data.upvotes});
                this.setState({ views:1+res.data.views});
                this.view();
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

        if(document.cookie.match(/^(.*;)?\s*upvoted\s*=\s*[^;]+(.*)?$/)){
            document.getElementById("upvoteBtn").style.backgroundColor = "mediumseagreen";
            document.getElementById("upvoteBtn").style.borderColor = "seagreen";
        }
    }

    view(){
        if(!document.cookie.match(/^(.*;)?\s*viewed\s*=\s*[^;]+(.*)?$/)) {
            ArticleApiService.incrementViews(this.props.match.params.id);
            this.setState({views:this.state.views+1});
            document.cookie = "viewed=y";
        }
    }

    upvote(){
        if(!document.cookie.match(/^(.*;)?\s*upvoted\s*=\s*[^;]+(.*)?$/)){
            ArticleApiService.incrementUpvotes(this.props.match.params.id);
            this.setState({upvotes:this.state.upvotes+1});
            document.cookie = "upvoted=y;max-age=31536000";
            document.getElementById("upvoteBtn").style.backgroundColor = "mediumseagreen";
            document.getElementById("upvoteBtn").style.borderColor = "seagreen";
        }
    }

    render() {
        return (
            <div className="row viewarticle">
                <div style={{left:"150px", position:"fixed", zIndex:"1000"}}>
                    <h1>
                        <button id="upvoteBtn" onClick={this.upvote} className="btn btn-danger" style={{width:"50px", marginBottom:"10px"}} title="Click to upvote!"><i className="fa fa-caret-up"/><br/>{this.state.upvotes}</button>
                        <br/>
                        <span className="btn btn-light" style={{cursor:"auto", width:"50px"}} title="Views"><i className="fa fa-eye"/>&nbsp;{this.state.views}</span>
                    </h1>
                </div>

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

                    <PostComment articleid={this.state.article.articleid}/>
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