import React from 'react';
import {render} from 'react-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Style from '../../public/styles/bootstrap.min.css'

let store = createStore(reducers);


render(
      <Provider store={store}>
       <Routes />
      </Provider>,   
       document.getElementById('app')
   );
      