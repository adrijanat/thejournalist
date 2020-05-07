import React from "react";
import ReactDOM from "react-dom";

import LastFromCategory from "../article/LastFromCategory";
import ListStats from "../article/ListStats";

class Grid extends React.Component {
    constructor(props) {
        super(props);
        const cats = ['world','news','technology','culture','health','science','opinion','business'];
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">

                    <div className="col-md-4 catgrid">
                        <LastFromCategory catid="1" category="world"/>
                        <LastFromCategory catid="2" category="news"/>
                        <LastFromCategory catid="5" category="health"/>
                        <LastFromCategory catid="4" category="culture"/>
                    </div>
                    <div className="col-md-4 catgrid">
                        <LastFromCategory catid="3" category="technology"/>
                        <LastFromCategory catid="7" category="opinion"/>
                        <LastFromCategory catid="6" category="science"/>
                        <LastFromCategory catid="8" category="business"/>
                    </div>

                    <div className="col-md-4 stats">

                        <ListStats id="list1" naslov="latest"/>

                        <div className="filler" id="fill1"></div>

                        <ListStats id="list2" naslov="mostviewed"/>

                        <div className="filler" id="fill2"></div>

                        <ListStats id="list3" naslov="mostupvoted"/>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Grid;
