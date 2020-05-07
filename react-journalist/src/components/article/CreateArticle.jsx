import React, { Component } from 'react';
import {execute, link, getImage} from '../../jou/create_article.js';
import axios from "axios";

class CreateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            message: null
        }
        this.reloadAuthorList = this.reloadAuthorList.bind(this);
    }

    componentDidMount() {
        this.reloadAuthorList();
    }

    reloadAuthorList() {
        axios.get('http://localhost:8080/authors')
            .then(res => {
                const authors = res.data;
                this.setState({ authors });
            })
    }

    render() {
        return (
            <div className="createarticle">
                <h2 className="text-center" style={{width:"100%"}}>Create new article</h2>
                <br/>

                <input className="form-control titlecontrol" type="text" id="inputTitle" placeholder="Title" style={{fontSize:"1.5rem", borderRadius:"0"}}/>
                <br/>

                <div className="row">
                    <div className="col-md-8">
                            {/* author
                            <input type="text" className="form-control" id="inputAuthor" placeholder="Author(s)"/>
                            */}

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
                            <div className="editor form-control" contentEditable id="inputArticle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare fermentum
                                    pharetra. In vitae tempus libero. In venenatis egestas elit.</p>
                                <p>Pellentesque eget egestas tellus, et facilisis neque. Pellentesque nec posuere turpis, in
                                    lobortis justo. Praesent vestibulum tellus sed nulla dignissim feugiat. Donec placerat
                                    mi in risus maximus ultrices.</p>
                                <p>Phasellus ante diam, sodales eget nisl sit amet, euismod lobortis felis. Vestibulum quis
                                    tempus magna. Nullam ornare, massa nec molestie condimentum, purus odio volutpat dolor,
                                    eget vulputate leo neque consequat sem. Sed consectetur metus in orci eleifend eleifend.
                                    Donec id massa sed nisl auctor posuere. Orci varius natoque penatibus et magnis dis
                                    parturient montes, nascetur ridiculus mus. Maecenas lacinia dictum tortor a cursus.</p>
                                <p>Praesent eget condimentum sapien. Maecenas sagittis lacinia ex. Aenean eu vehicula nunc.
                                    Curabitur dignissim enim ac sapien lacinia, eu maximus metus ornare. Mauris commodo
                                    vitae augue vel pharetra.</p>
                            </div>

                            <br/>

                            {/* keywords */}
                            <input className="form-control" type="text" id="inputKeywords" placeholder="#keywords"/>
                    </div>

                    <div className="col-md-4">
                        <select id="inputCategory" className="form-control">
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

                        <div className="form-group">
                            <label>Image</label>
                            <br/>
                            <input type="file"/>
                            <br/><br/>
                            <div style={{width:"100%", height:"250px", background:"#ddd"}}></div>
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