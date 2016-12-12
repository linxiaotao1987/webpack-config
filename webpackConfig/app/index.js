/**
 * Created by xiaochao on 2016/12/12.
 */

import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './sass/main.scss';
import './setScaleFontsize';
import {Router,Route,hashHistory} from 'react-router';


class Home extends Component {
    render(){
        return <div className="test">
            <a href="#/test">'heheda'</a>
        </div>
    }
}

class Test extends Component {
    render(){
        return <div className="test">
            <a href="#/">'dadada'</a>
        </div>
    }
}

render(<Router history={hashHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="test" component={Test}></Route>
</Router>,document.querySelector('#test'));


