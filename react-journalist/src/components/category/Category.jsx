import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ListArticleElement from "../article/ListArticleElement";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category : '',
            articles : [],
            message: null
        };
        this.reloadArticles = this.reloadArticles.bind(this);
    }

    componentDidMount() {
        this.reloadArticles();
    }

    reloadArticles() {
        axios.get('http://localhost:8080/categories/'+this.props.match.params.id)
            .then(res => {
                const category = res.data.name;
                const articles = res.data.articles;
                this.setState({ category, articles });
            })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>{this.state.category} ARTICLES ({this.state.articles.length})</h1>
                <br/><br/>
                { this.state.articles.map(
                    article =>
                        <div className="row">
                            <div className="col-md-12">
                                <ListArticleElement article={article}/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Category;


