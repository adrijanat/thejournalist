import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditAuthor extends Component {

    constructor(props){
        super(props);
        this.state ={
            authorid: '',
            name: '',
            email: '',
            bio: '',
            message: null
        };
        this.saveAuthor = this.saveAuthor.bind(this);
        this.loadAuthor = this.loadAuthor.bind(this);
    }

    componentDidMount() {
        this.loadAuthor();
    }

    loadAuthor() {
        if(window.localStorage.getItem("authorid") !=null){
            ApiService.fetchById("authors",window.localStorage.getItem("authorid"))
                .then((res) => {
                    let author = res.data;
                    this.setState({
                        authorid: author.authorid,
                        name: author.name,
                        email: author.email,
                        bio: author.bio,
                        image: author.image
                    })
                });
        }
        else {
            ApiService.fetchById("authors", this.props.match.params.id)
                .then((res) => {
                    let author = res.data;
                    this.setState({
                        id: author.authorid,
                        name: author.name,
                        email: author.email,
                        bio: author.bio,
                        image: author.image
                    })
                });
        }
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveAuthor = (e) => {
        e.preventDefault();
        let author = {
            name: this.state.name,
            email: this.state.email,
            bio: this.state.bio,
            image: this.state.image
        };

        ApiService.edit("authors", this.props.match.params.id, author)
            .then(res => {
                this.setState({message : 'Author added successfully.'});
                this.props.history.push('/authors');
            });
    };

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Author</h2>
                <form>
                    <div className="row">
                        <div className="col-md-7">

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" defaultValue={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input name="firstName" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Bio</label>
                        <textarea rows="5" name="bio" className="form-control" value={this.state.bio} onChange={this.onChange}/>
                    </div>
                        </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Image</label>
                                    <br/>
                                    <input type="file"/>
                                    <br/><br/>
                                    <div className="text-center">
                                        <img src={this.state.image} style={{height:"200px", background:"#ddd"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <a className="btn btn-outline-secondary" href={"/authors/"+this.state.authorid}>Discard</a>
                    <button style={{float:"right"}} className="btn btn-outline-success" onClick={this.saveAuthor}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditAuthor;