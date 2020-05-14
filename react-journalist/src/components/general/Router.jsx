import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

                <Route path="/articles/create" component={CreateArticle} />
                <Route path="/articles/:id/stories" component={ViewArticleStories} />
                <Route path="/articles/:id" component={ViewArticle} />

                <Route path="/authors" exact component={ListAuthors} />
                <Route path="/authors/add" component={AddAuthor} />
                <Route path="/authors/:id/edit" component={EditAuthor} />
                <Route path="/authors/:id" exact component={ViewAuthor} />

                <Route exact component={Error} />
            </Switch>
        </Router>
    )
};


export default AppRouter;
