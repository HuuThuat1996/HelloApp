import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import First from './Fisrt';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
var ele = React.createElement('h1',{className:'greeting'},'Hello World !!');
ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(ele, document.getElementById('hello'));
ReactDOM.render(<First/>, document.getElementById('chart'));


registerServiceWorker();
