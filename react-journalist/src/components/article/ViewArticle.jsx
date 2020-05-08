import React, { Component } from 'react';
import axios from "axios";

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article : {},
            authors : [],
            comments : [],
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
                var article = res.data;
                var timestamp = article.datelastmodified;
                article.datelastmodified = new Date(timestamp).toUTCString();
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

    }

    render() {
        return (
            <div className="row viewarticle">
                <div className="col-md-12">
                    <h3 className="category">NEWS</h3>
                    <h2>{this.state.article.title}</h2>
                    <p>by Mikaela Shiffrin | {this.state.article.datelastmodified}</p>
                    <i>{this.state.article.summary}</i>
                    <br/><br/>
                    <img style={{width:"100%"}} src={this.state.article.image}/>
                    <br/><br/>
                    <div style={{whiteSpace:"pre-line"}}>
                        {this.state.article.body}
                    </div>
                    <br/>
                    <hr/>
                    <h3>COMMENTS ({this.state.comments.length})</h3>
                </div>
            </div>
        )
    }
}

export default ViewArticle;
