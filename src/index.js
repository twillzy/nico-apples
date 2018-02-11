import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faEnvelope);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
