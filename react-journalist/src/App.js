import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.min';

import AppRouter from "./components/general/Router";
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import CreateArticle from "./components/article/CreateArticle";

function App() {

    return (
        <div>
            <div className="container">
                <Header/>

                <br/><br/>

                <AppRouter/>
            </div>

            {/*<br/><br/>*/}

            <Footer/>
        </div>
    );
}

export default App;