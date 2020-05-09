import React, { Component } from 'react';
import axios from "axios";

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
        axios.get('http://localhost:8080/articles/'+this.props.article.articleid+"/authors")
            .then(res => {
                const authors = res.data._embedded.authors;
                this.setState({ authors });
            });

        // get article's category
        axios.get('http://localhost:8080/articles/'+this.props.article.articleid+'/category')
            .then(res => {
                const category = res.data.name;
                this.setState({ category });
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
                    <p><span className="category">{this.state.category}</span> | by { this.state.authors.map(author => <a href={author._links.self.href.substring(21)}>{author.name}</a>,) } | {new Date(this.props.article.datelastmodified).toUTCString()}</p>
                    <p>{this.props.article.summary}</p>
                </div>
            </div>
        )
    }
}

export default ListArticleElement;