import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Page from "./Component/Page/Page";
import Edit from "./Component/Edit/Edit";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Layout>
                <Route path="/pages/home" exact  component={Page}/>
                <Route path="/pages/about" exact  component={Page}/>
                <Route path="/pages/contact" exact component={Page}/>
                <Route path="/pages/musik" exact component={Page}/>
                <Route path="/pages/admin"  component={Edit}/>
            </Layout>
        </div>
      </BrowserRouter>
  );
}

export default App;
