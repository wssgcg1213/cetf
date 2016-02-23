/**
 * Created at 16/2/23.
 * @Author Ling.
 * @Email i@zeroling.com
 */
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import WeUI from 'react-weui';
import 'weui';

import Normal from './pages/normal/index';
import Noticket from './pages/noticket/index';


ReactDOM.render((
  <Router>
    <Route path="/" component={Normal}/>
    <Route path="noticket" component={Noticket}/>
  </Router>
), document.getElementById('container'));
