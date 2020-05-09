import React, { Component } from 'react';
import axios from "axios";

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
        // get last article in category
        axios.get('http://localhost:8080/articles/latestincat/'+this.props.catid)
            .then(res => {
                const article = res.data;
                this.setState({ article });

                // get article's authors
                axios.get('http://localhost:8080/articles/'+article.articleid+"/authors")
                    .then(res => {
                        const authors = res.data._embedded.authors;
                        this.setState({ authors });
                    });
            });
    }

    render() {
        return (
            <div className="categoryarticle">
                <h5>{this.props.category} »</h5>
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