import React, { Component } from 'react';
import axios from "axios";

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
        axios.get('http://localhost:8080/articles/'+this.props.match.params.id)
            .then(res => {
                const article = res.data;
                this.setState({ article });
            });

        // get article's authors
        axios.get('http://localhost:8080/articles/'+this.props.match.params.id+"/authors")
            .then(res => {
                const authors = res.data._embedded.authors;
                this.setState({ authors });
            });

        // get article's comments
        axios.get('http://localhost:8080/articles/'+this.props.match.params.id+'/comments')
            .then(res => {
                const comments = res.data._embedded.comments;
                this.setState({ comments});
            });

        // get article's keywords
        axios.get('http://localhost:8080/articles/'+this.props.match.params.id+'/keywords')
            .then(res => {
                const keywords = res.data._embedded.keywords;
                this.setState({ keywords });
            });

        // get article's category
        axios.get('http://localhost:8080/articles/'+this.props.match.params.id+'/category')
            .then(res => {
                const category = res.data.name;
                this.setState({ category });
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
                    <br/><br/>
                    <h3 style={{display:"inline"}}>In this article: </h3>
                    {
                        this.state.keywords.map(keyword =>
                            <span className="badge badge-pill"> {keyword.name} </span>
                        )
                    }

                    <hr/>
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