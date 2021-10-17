import './App.css';
import './styles/body.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/activityFeed.css'
import './styles/archive.css'
import './styles/detail.css'
import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Detail from './components/detail.js'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import SyncIcon from '@mui/icons-material/Sync';
import ActivityFeed from './components/activityFeed';
import Archive from './components/archive';

class App extends Component {
  //constructor 
  constructor(props) {
    super(props);

  }

  //reset API
  reset() {
    fetch(`https://aircall-job.herokuapp.com/reset`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    window.location = 'http://localhost:3000/activityFeed';
  }

  render() {
    const routes = ["/activityFeed", "/archive", "/detail"];

    return (
      <div className='container'>
        <Header />
        <div className="tab">
          <BrowserRouter>
            <Route
              path="/"
              render={(history) => (
                <Tabs
                  value={
                    history.location.pathname !== "/"
                      ? history.location.pathname
                      : false
                  }
                >
                  {console.log(history.location.pathname)}
                  <Tab
                    value={routes[0]}
                    label="Inbox"
                    component={Link}
                    to={routes[0]}
                  />
                  <Tab
                    value={routes[1]}
                    label="Archived calls"
                    component={Link}
                    to={routes[1]}

                  />
                  <div className="syncIcon" onClick={this.reset}>
                    <SyncIcon />
                  </div>
                </Tabs>
              )}
            />
            <Switch>
              <Route path="/activityFeed" component={ActivityFeed} />
              <Route path="/archive" component={Archive} />
              <Route path="/detail/:id" render={(props) => (
                <Detail id={props.match.params.id} />
              )} />
            </Switch>
          </BrowserRouter>

        </div>
        <Footer />
      </div>
    );
  };
};
export default App;
