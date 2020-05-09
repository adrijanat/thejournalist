import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from "./Homepage";
import Search from "./Search";
import Error from "./Error";
import Grid from "./Grid";

import Category from "../category/Category";

import ListAuthors from "../author/ListAuthors";
import ViewAuthor from "../author/ViewAuthor";
import AddAuthor from "../author/AddAuthor";
import EditAuthor from "../author/EditAuthor";

import CreateArticle from "../article/CreateArticle";
import ViewArticle from "../article/ViewArticle";
import ViewArticleStories from "../article/ViewArticleStories";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Grid} />
                <Route path="/search" exact component={Search} />

                <Route path="/categories/:id" exact component={Category} />

                <Route path="/create" exact component={CreateArticle} />
                <Route path="/articles/:id" exact component={ViewArticle} />
                <Route path="/articles/stories" exact component={ViewArticleStories} />

                <Route path="/authors" exact component={ListAuthors} />
                <Route path="/authors/:id" exact component={ViewAuthor} />
                <Route path="/authors/:id/edit" exact component={EditAuthor} />
                <Route path="/authors/add" exact component={AddAuthor} />

                <Route exact component={Error} />
            </Switch>
        </Router>
    )
};


export default AppRouter;
