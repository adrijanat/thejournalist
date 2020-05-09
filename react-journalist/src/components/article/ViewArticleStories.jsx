import React, { Component } from 'react';
import axios from "axios";

class ViewArticleStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories : []
        };
    }

    componentDidMount() {
        // get article's stories
        axios.get('http://localhost:8080/articles/' + this.props.match.params.id + "/stories")
            .then(res => {
                const stories = res.data._embedded.stories;
                this.setState({stories});
            });
    }

    render() {
    return (
        <div>
            <table className="table table-bordered">
                <tr>
                    <td>Article</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Question</td>
                    <td></td>
                </tr>
            </table>
            <br/>
            <h4>STORIES ({this.state.stories.length}):</h4>
            {
                this.state.stories.map(
                    story =>
                        <table className="table table-bordered">
                            <tr style={{"backgroundColor":"#ddd"}}>
                                <td colSpan="2"><b>Story</b></td>
                            </tr>
                            <tr>
                                <td><b>Name</b></td>
                                <td>{story.name}</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>{story.email}</td>
                            </tr>
                            <tr>
                                <td><b>Location</b></td>
                                <td>{story.location}</td>
                            </tr>
                            <tr>
                                <td><b>Summary</b></td>
                                <td>{story.summary}</td>
                            </tr>
                            <tr>
                                <td><b>Story</b></td>
                                <td>{story.body}</td>
                            </tr>
                        </table>
                )
            }
        </div>
    )
    }
}

export default ViewArticleStories;