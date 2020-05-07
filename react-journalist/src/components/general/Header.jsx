import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
var logo = require('../../jou/logo.png');
var small = require('../../jou/small.png');


class Header extends Component {
    render() {
        return (
            <div className="mt-5">
                <header className="py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col">
                            <form className="form-inline" action="/search" style={{margin:"0",padding:"0"}}>
                                <input type="text" className="form-control" name="q" placeholder="Search..."/>
                                &nbsp;
                                <button className="btn fa fa-search searchbutton"/>
                            </form>
                        </div>
                        <div className="col">
                            <a href="/"><img alt="logo" className="img-fluid" src={logo}/></a>
                        </div>
                        <div className="col">
                            <img alt="cover" className="img-rotated" src={small}/>

                            <div style={{float:"right", textAlign:"center"}}>
                                {/*
                                <a style={{display:"block"}} className="text-muted" href="#">Subscribe</a>
                                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                                */}
                                <a className="indred" href="/authors">Authors</a>
                                <br/>
                                <a className="btn btncreatearticle" href="/articles/create"><span style={{color:"white"}}>Create article</span></a>
                            </div>
                        </div>
                    </div>
                </header>

                <ul className="nav nav-fill nav-cats">
                    <li className="nav-item"><a className="nav-link" href="/categories/1">World</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/2">News</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/3">Technology</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/4">Culture</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/5">Health</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/6">Science</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/7">Opinion</a></li>
                    <li className="nav-item"><a className="nav-link" href="/categories/8">Business</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;