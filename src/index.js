import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from 'history';

import './styles/global.scss';
import App from './App';

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
    const { hash } = location;
    if (hash !== '') {
        setTimeout(
            () => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: "smooth"});
                }
            },
            0
        );
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Router history={browserHistory}>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
