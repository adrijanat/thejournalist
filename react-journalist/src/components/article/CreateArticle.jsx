import React, { Component } from 'react';
import {execute, link, getImage} from '../../jou/create_article.js';
import ApiService from "../../service/ApiService";
import ArticleApiService from "../../service/ArticleApiService";

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            summary:'',
            body:'',
            status:'',
            image:'',
            categoryid: '',
            authors: [],
            message: null
        };
        this.reloadAuthorList = this.reloadAuthorList.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
    }

    componentDidMount() {
        this.reloadAuthorList();
    }

    reloadAuthorList() {
        // get authors
        ApiService.fetchAll("authors")
            .then(res => {
                this.setState({authors:res.data});
            });
    }

    saveArticle = (e) => {
        e.preventDefault();

        let article = {
            title: this.state.title,
            summary: this.state.summary,
            body: this.state.body,
            image: this.state.image,
            status: 'published'
        };

        // post article
        ApiService.add("articles", article)
            .then(res => {
                var aid = res.data.articleid;
                ArticleApiService.addToCategory(this.state.categoryid,aid);
                //ArticleApiService.addAuthors(aid, this.state.authors);
                this.setState({message: 'Article posted.'});
                //window.location.href = "/articles"+aid;
                //window.location.reload();
            });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="createarticle">
                <div className="row">
                    {/* title */}
                    <div className="col-md-12">
                        <h2 className="text-center" style={{width:"100%"}}>Create new article</h2>
                        <br/>
                        <input className="form-control titlecontrol" name="title" type="text" value={this.state.title} onChange={this.onChange} placeholder="Title" style={{fontSize:"1.5rem", borderRadius:"0"}}/>
                        <br/>
                    </div>

                    {/* left: summary, body, image */}
                    <div className="col-md-8">
                        <textarea className="form-control" name="summary" value={this.state.summary} rows="2" onChange={this.onChange}>Summary</textarea>
                        {/* toolbar
                            <div id="toolbar" className="toolbar">
                                <button className="tool-items fa fa-bold" onClick={()=>execute('bold')}/>
                                <button className="tool-items fa fa-italic" onClick={()=>execute('italic')}/>
                                <button className="tool-items fa fa-underline" onClick={()=>execute('underline')}/>
                                <button className="tool-items fa fa-strikethrough" onClick={()=>execute('strikethrough')}/>
                                <button className="tool-items fa fa-link" onClick={link}/>
                                <input className="tool-items fa fa-camera" type="file" accept="image/*" id="file" style={{display: "none"}} onChange={getImage}/>
                                <label htmlFor="file" className="tool-items fa fa-camera" style={{marginLeft: "0.04rem", paddingLeft:".7rem"}}/>
                                <button className="tool-items fa fa-align-left" onClick={()=>execute('justifyLeft')}/>
                                <button className="tool-items fa fa-align-center" onClick={()=>execute('justifyCenter')}/>
                                <button className="tool-items fa fa-align-right" onClick={()=>execute('justifyRight')}/>
                                <button className="tool-items fa fa-outdent" onClick={()=>execute('outdent')}/>
                                <button className="tool-items fa fa-indent" onClick={()=>execute('indent')}/>
                                <button className="tool-items fa fa-eraser" onClick={()=>execute('removeFormat')}/>
                            </div>
    */}
                        {/*<div className="editor form-control" contentEditable name="body" value={this.state.body} onChange={this.onChange}>Your text here</div><br/>*/}
                        <br/>
                        <textarea className="form-control" rows="10" name="body" value={this.state.body} onChange={this.onChange}>Your text here</textarea><br/>

                        <input type="text" className="form-control" name="image" value={this.state.image} onChange={this.onChange} placeholder="Image URL"/>
                    </div>

                    {/* right: authors, category, status, keywords */}
                    <div className="col-md-4 jumbotron" style={{paddingTop:"30px", paddingBottom:"30px"}}>

                        <b>By authors:</b>
                        <select  name="authors" className="form-control">
                            {this.state.authors.map( author => <option value={author.authorid}>{author.name}</option>) }
                        </select>

                        <br/><b>Category:</b>
                        <select className="form-control" value={this.state.categoryid} onChange={this.onChange}>
                            <option value="1">World</option>
                            <option value="2">News</option>
                            <option value="3">Technology</option>
                            <option value="4">Culture</option>
                            <option value="5">Health</option>
                            <option value="6">Science</option>
                            <option value="7">Opinion</option>
                            <option value="8">Business</option>
                        </select>

                        <br/><b>Status:</b><br/>
                        <input type="radio" name="status" value="published" checked/> Published<br/>
                        <input type="radio" name="status" value="draft"/> Draft<br/>

                        <br/><b>Keywords:</b><br/>
                        <input className="form-control" type="text" id="keywords" placeholder="keywords"/>
                    </div>
                </div>

                <br/>
                {/* actions */}
                <div className="row">
                    <div className="col-md-12">
                        <a href="/" className="sai btn btn-outline-secondary">Discard</a>
                        <button style={{float:"right"}} className="btn btn-outline-success" onClick={this.saveArticle}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateArticle;