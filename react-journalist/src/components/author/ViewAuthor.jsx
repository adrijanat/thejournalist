import React, { Component } from 'react';
import ListArticleElement from "../article/ListArticleElement";
import ApiService from "../../service/ApiService";

export default class ViewAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author : {},
            articles : [],
            drafts : [],
            message: null
        };
        this.reloadAuthor = this.reloadAuthor.bind(this);
    }

    componentDidMount() {
        this.reloadAuthor();
    }

    reloadAuthor() {
        ApiService.fetchById("authors",this.props.match.params.id)
            .then(res => {
                const author = res.data;
                if(res.data.length == 0 ) {
                    this.setState({message: "none"});
                    return;
                }
                const articles = author.articles.filter(function(art) {return art.status == "PUBLISHED";});
                const drafts = author.articles.filter(function(art) {return art.status == "DRAFT";});
                this.setState({ author , articles, drafts});
            })
    }

    render() {
        return (
            <div className="viewauthor">
                {(this.state.message == 'none')
                    ? <h1 style={{textAlign:"center"}}>Author not found</h1>
                    : <div>
                        <section id="author_profile">
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <div className="pic text-center">
                                        <img src={this.state.author.image}/>
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <span style={{float:"right"}}>
                                    <a href={this.state.author.authorid+"/edit"} title="Edit"><i className="btn fa fa-edit btn-outline-secondary"/></a>
                                    </span>

                                    <h2>{this.state.author.name}</h2>
                                    <p>{this.state.author.bio}</p>
                                    <p>{this.state.author.email}</p>
                                    <h3>
                                        <i className="fa fa-twitter-square"/>
                                        <i className="fa fa-linkedin-square"/>
                                    </h3>
                                </div>
                            </div>
                        </section>

                        <br/>

                        <section id="author_articles">
                            <br/>
                            <h2>Articles ({this.state.articles.length})</h2>
                            <br/>
                            { this.state.articles.map( article => <ListArticleElement article={article}/>) }
                        </section>
                        <br/>

                        <section id="author_drafts">
                            <br/>
                            <h2>Drafts ({this.state.drafts.length})</h2>
                            <br/>
                            { this.state.drafts.map( article => <ListArticleElement isdraft="true" article={article}/>) }
                        </section>

                    </div>
                }
            </div>
        )
    }
}

//export default ViewAuthor;