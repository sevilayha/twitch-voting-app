import React from 'react';
import ReactDOM from 'react-dom';
import LiveVoting from './LiveVoting';
import IdeasList from './IdeasList';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faReact,
  faVuejs,
  faAngular
} from '@fortawesome/free-brands-svg-icons';

library.add(faReact, faVuejs, faAngular);

function App() {
  return (
    <div className="container mx-auto py-20 text-grey-darkest">
      <div className="mb-20">
        <LiveVoting />
      </div>
      <IdeasList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
