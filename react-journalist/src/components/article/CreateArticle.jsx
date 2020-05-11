import React, { Component } from 'react';
import {execute, link, getImage} from '../../jou/create_article.js';
import ApiService from "../../service/ApiService";

class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            title : this.state.title,
            summary : this.state.summary,
            body: this.state.body,
            status: this.state.status,
            //image : this.state.image
        };

        let category = this.state.category;

        let authors = this.state.authors;

        // post article
        var articleN = ApiService.add("articles", article)
            .then(res => {
                var aid = articleN.articleid;
                /* post article's category
                //ApiService.customAdd("articles/"+ aid +"/category",catid);

                // post article's authors
                //ApiService.customAdd("articles/"+ aid +"/authors",authorids);

                // post article's keywords
                //ApiService.customAdd("articles/"+ aid +"/keywords",keys);*/

                this.setState({message: 'Article posted.'});
            });
    };

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
            <div className="createarticle">
                <h2 className="text-center" style={{width:"100%"}}>Create new article</h2>
                <br/>

                {/* title */}
                <input className="form-control titlecontrol" type="text" id="title" value={this.state.title} placeholder="Title" style={{fontSize:"1.5rem", borderRadius:"0"}}/>
                <br/>

                {/* summary */}
                <input className="form-control titlecontrol" type="text" id="summary" value={this.state.summary} placeholder="Summary" style={{borderRadius:"0"}}/>
                <br/>

                <div className="row">
                    <div className="col-md-8">
                            {/* authors */}
                            <select name="authors" className="form-control">
                                {
                                    this.state.authors.map(
                                        author =>
                                            <option value={author.authorid}>{author.name}</option>
                                    )
                                }
                            </select>

                            <br/>
                            {/* toolbar */}
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

                            <br/>
                            {/* editor */}
                            <div className="editor form-control" contentEditable id="body" value={this.state.body}/>

                            <br/>
                            {/* keywords */}
                            <input className="form-control" type="text" id="keywords" value={this.state.keywords} placeholder="keywords"/>
                    </div>

                    <div className="col-md-4">
                        {/* category */}
                        <select className="form-control" id="category" value={this.state.category}>
                            <option>World</option>
                            <option>News</option>
                            <option>Technology</option>
                            <option>Culture</option>
                            <option>Health</option>
                            <option>Science</option>
                            <option>Opinion</option>
                            <option>Business</option>
                        </select>

                        <br/>
                        {/* image */}
                        <div className="form-group">
                            <label>Image</label>
                            <br/>
                            <input type="file"/>
                            <br/><br/>
                            <div style={{width:"100%", height:"250px", background:"#ddd"}}/>
                        </div>

                    </div>
                </div>

                <br/>

                <div className="row">
                    <div className="col-md-12">
                        {/* actions */}
                        <a href="/" className="sai btn btn-outline-secondary">Discard</a>
                        <div style={{float:"right"}}>
                            <button className="btn btn-outline-secondary">Save as draft</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-outline-success">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreateArticle;