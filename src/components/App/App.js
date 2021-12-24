import React from 'react';
import { renderRoutes } from 'react-router-config';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Page1 from "../Page1";
import Page2 from "../Page2";
import HomePage from '../HomePage';
import './App.css';


const Main = ({ route }) =>{
  return( 
  <div>
      {renderRoutes(route.routesConf)}
  </div>
  )}

const Food = () => {
  return(<h3>Food</h3>);
}

const Goods = (props) =>{
  return(
  <div>
      <h3>Goods</h3>
      {renderRoutes(props.route.routesConf)(props ='hello')}
  </div>
  )}

const HomeGoods = (props) =>(
  <div>
    <h4>HomeGoods</h4>
    {props}
  </div>
  ) 
const SportGoods = (props) =>(
  <div>
    <h4>SportGoods</h4>
    <span>{props}</span>
  </div>
  )

const routesConf = [
  {
    component: Main,
    routes:[
    {
        path:'/food',
        component: Food,
    },
      {
        path:'/goods/:id',
        component: Goods,
        routes:[
          {
            path: '/goods/:id/home-goods',
            component: HomeGoods
          },
          {
            path: '/goods/:id/sport-goods',
            component: SportGoods
          }
        ]
      }
    ]

  }  
]

class App extends React.Component {
  render(){
  return (
    <div className="App"> 
      <Router>
        <menu>
          {/* TASK__1 */}
              <ul>
                <li><Link to='/food'>Food</Link></li>
                <li><Link to='/goods'>Goods</Link>
                  <ol>
                    <li>
                      <Link to='/home-goods'>HomeGoods</Link>
                    </li>
                    <li>
                      <Link to='/sport-goods'>SportGoods</Link>
                    </li>
                  </ol>
                </li>
              </ul>

{/* TASK__2 */}
          {/* <li>
            <Link to='/home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/page1' >
              page 1
            </Link>
          </li>
          <li>
            <Link to='/page2' >
              page 2
            </Link> 
          </li>   */}
        </menu>

{/* TASK__2 */}

  {/* <Switch>
      <Route path='/home'exact component={HomePage} />
      <Route path='/page2'  component={Page2}/>
      <Route path='/page1'  component={Page1}/>
  </Switch>     */}

{/* TASK__1 */}

      {renderRoutes(routesConf)}
      </Router>  
    </div>
  )}

}

export default App;
