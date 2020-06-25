import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import BaseLayout from './components/layout/BaseLayout'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import ProjectManagement from './components/projectman/ProjectManagement';
// import TodoList from './components/todo/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null
    }
  }

  //we have to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), 
      (err) => console.log(err)
    )
  
    return <div>Latitude:</div>
  }
}

ReactDOM.render(
  <App />
  ,
  document.querySelector('#root')
);


{/* <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/todo" component={TodoList} />
        <Route exact path="/projects" component={ProjectManagement} />
      </Switch>
    </BaseLayout>
  </BrowserRouter> */}