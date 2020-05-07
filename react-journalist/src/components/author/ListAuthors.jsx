import React, { Component } from 'react'
import AuthorApiService from "../../service/AuthorApiService";

import axios from 'axios';

class ListAuthors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            message: null
        }
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.editAuthor = this.editAuthor.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
        this.reloadAuthorList = this.reloadAuthorList.bind(this);
    }

    componentDidMount() {
        this.reloadAuthorList();
    }

    reloadAuthorList() {

        axios.get('http://localhost:8080/authors')
        //AuthorApiService.fetchAuthors()
            .then(res => {
                const authors = res.data;
                this.setState({ authors });
            })

        /*
        AuthorApiService.fetchAuthors()
            .then((res) => {
                this.setState({authors: res.data.result})
            });*/
    }

    deleteAuthor(authorid) {
        if(!window.confirm('Are you sure you want to delete this author?')){ return; }

        axios.delete('http://localhost:8080/authors/'+authorid)
        //AuthorApiService.deleteAuthor(authorid)
            .then(res => {
                this.setState({message : 'Author deleted successfully.'});
                this.setState({authors: this.state.authors.filter(author => author.authorid !== authorid)});
            })

    }

    editAuthor(id) {
        window.localStorage.setItem("authorid", id);
        this.props.history.push('edit');
    }

    addAuthor() {
        window.localStorage.removeItem("authorid");
        this.props.history.push('authors/add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Authors ({this.state.authors.length})</h2>
                <br/>
                <button className="btn btn-outline-success" onClick={() => this.addAuthor()}> Add Author</button>
                <br/><br/>
                <table className="table listtable table-striped">
                    <tbody>
                    {this.state.authors.map(
                        author =>
                            <tr key={author.authorid}>
                               <td>
                                    <div className="pic">
                                        <a href={"authors/"+author.authorid}><img className="img-fluid" src={author.image}/></a>
                                    </div>
                                </td>
                                <td>
                                    <a href={"authors/"+author.authorid}><b>{author.name}</b></a>
                                    <br/>
                                    {author.email}
                                    <br/><br/>
                                    {author.bio}
                                </td>
                                <td className="listactions">
                                    {/*<button className="btn btn-outline-secondary" onClick={() => this.editAuthor(author.authorid)}> Edit</button>
                                    <button className="btn btn-outline-danger" onClick={() => this.deleteAuthor(author.authorid)}> Delete</button>*/}

                                    <a className="btn btn-outline-secondary" href={"/authors/"+author.authorid+"/edit"}> Edit</a>
                                    <button className="btn btn-outline-danger" onClick={() => this.deleteAuthor(author.authorid)}> Delete</button>

                                </td>
                            </tr>
                    )}
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListAuthors;