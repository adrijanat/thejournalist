import React, { Component } from 'react'
import axios from "axios";
import ApiService from "../../service/ApiService";

class AddAuthor extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            bio: '',
            image: '',
            message: null
        };
        this.saveAuthor = this.saveAuthor.bind(this);
    }

    saveAuthor(e) {
        e.preventDefault();
        let author = {
            name: this.state.name,
            email: this.state.email,
            bio: this.state.bio,
            image: this.state.image
        };

        ApiService.add("authors",author)
            .then(res => {
                this.setState({message : 'Author added successfully.'});
                this.props.history.push('/authors');
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Author</h2>
                <form>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Bio</label>
                            <textarea rows="5" name="bio" className="form-control" value={this.state.bio} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" name="image" className="form-control" value={this.state.image} onChange={this.onChange}/>
                        </div>

                    </div>
                    {/*
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Image</label>
                            <br/>
                            <input type="file"/>
                            <br/><br/>
                            <div style={{width:"100%", height:"200px", background:"#ddd"}}/>
                        </div>
                    </div>
                    */}
                    </div>
                    <a className="btn btn-outline-secondary" href="/authors">Discard</a>
                    <button style={{float:"right"}} className="btn btn-outline-success" onClick={this.saveAuthor}>Add Author</button>
                </form>
            </div>
        );
    }
}

export default AddAuthor;