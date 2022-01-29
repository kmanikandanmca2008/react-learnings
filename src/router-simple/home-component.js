import Page1Component from "./page1-component";
import Page2component from "./page2-component";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Router Simple : Home Component</h1>
                <Router>
                    <Routes>
                        <Route path="/page1" element={<Page1Component />} />
                        <Route path="/page2" element={<Page2component />} />
                    </Routes>

                </Router>
            </div>
        );
    }
}

export default HomeComponent;