import React, {Component} from 'react';
import Header from "../Component/Header/Header";
import {Route, Switch} from "react-router-dom";
import Task1 from "../Component/Task1/Task1";
import Task2 from "../Component/Task2/Task2";
import Edit from "../Component/Task1/Edit/Edit";
import Task3 from "../Component/Task3/Task3";

class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/task1" component={Task1}/>
                    <Route exact path="/task1/:id/edit" component={Edit}/>
                    <Route exact path="/task2" component={Task2}/>
                    <Route exact path="/task3" component={Task3}/>

                </Switch>
            </div>
        );
    }
}

export default Content;