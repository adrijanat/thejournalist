import React, { Component } from 'react';

class ViewArticleStories extends Component {
    render() {
        return (
            <div>
                <h4>ARTICLE:<br/>Burglary stories: ‘I slept with the light on for a year afterwards’</h4><br/>
                <h4>QUESTION:<br/>Have you been a victim of a burglary?</h4><br/>
                <h4>STORIES(3):</h4><br/>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table-bordered">
                            <tr style={{"backgroundColor":"#ddd"}}>
                                <td><b>Story id</b></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><b>Name</b></td>
                                <td>Laura Jones</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>laura@jones.com</td>
                            </tr>
                            <tr>
                                <td><b>Location</b></td>
                                <td>Dublin</td>
                            </tr>
                            <tr>
                                <td><b>Summary</b></td>
                                <td>The first time the guy apologized</td>
                            </tr>
                            <tr>
                                <td><b>Story</b></td>
                                <td>
                                    <p>"My house in D8 was three times broken into in around one year. The first time we
                                        were all inside and the guy opened one of the room’s doors and even apologised
                                        to the person that was inside [who] thought it was just a friend trying to find
                                        the toilet as she was sleeping."</p>
                                    <p>"Another time, they stole a bike entering through the window when I was inside in
                                        daylight. He had less than 10 minutes to do it. The third time they stole
                                        everything they could including five laptops. The gardaí (that were the three
                                        times very nice but zero efficient) told me to make changes to the house and I
                                        did."</p>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>

            </div>
        )
    }
}

export default ViewArticleStories;