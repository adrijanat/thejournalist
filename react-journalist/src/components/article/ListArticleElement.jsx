import React, { Component } from 'react';

class ListArticleElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article : {},
        };
    }

    componentDidMount() {
        var article = this.props.article;
        var timestamp = article.datelastmodified;
        article.datelastmodified = new Date(timestamp).toUTCString();
        this.setState({ article });
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
                    <p><span className="category">News</span> | {this.props.article.datelastmodified}</p>
                    <p>{this.props.article.summary}</p>
                </div>
            </div>
        )
    }
}

export default ListArticleElement;