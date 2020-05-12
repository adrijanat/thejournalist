import React, { Component } from 'react';
import ApiService from "../../service/ApiService";
import ArticleApiService from "../../service/ArticleApiService";
import App from "../../App";

export default class PostComment extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            body: '',
            message: null
        };
        this.saveComment = this.saveComment.bind(this);
    }

    saveComment = (e) => {
        e.preventDefault();
        let comment = {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        };

        ApiService.add("comments",comment)
            .then(
                res => {
                    ArticleApiService.addComment(this.props.articleid, res.data.commentid);
                    this.setState({message: 'Comment posted.'});
                    window.location.reload();
                }
            )
    };

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div style={{background:"#eee",padding:"30px"}}>
                <form>
                    <div className="form-group row">
                        <div className="col-md-1"/>
                        <div className="col-md-11">
                            All fields are required. Your email will not be published.
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-1">Name</div>
                        <div className="col-md-11">
                            <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-1">Email</div>
                        <div className="col-md-11">
                            <input type="email" required className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea name="body" required className="form-control" rows="5" value={this.state.body} onChange={this.onChange}/>
                        </div>
                    </div>
                    <br/>
                    <div className="text-right">
                        <button onClick={this.saveComment} className="btn btn-outline-success">Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}
