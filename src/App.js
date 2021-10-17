import './App.css';
import './styles/body.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/activityFeed.css'
import './styles/activityDetail.css'
import './styles/archive.css'
import './styles/detail.css'
import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Detail from './components/detail.js'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import SyncIcon from '@mui/icons-material/Sync';
import ActivityDetail from './components/activityDetail';
import ActivityFeed from './components/activityFeed';
import Archive from './components/archive';



class App extends Component {
   //constructor 
   constructor(props) {
    super(props);
  
  }

  render(){
    const routes = ["/activityFeed", "/archive","/detail"];
  return (
    <div className='container'>
      <Header/>
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
                <div className="syncIcon">
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
  
      <Footer/>
    </div>
  );
};
};
export default App;
