/*
    클라이언트 사이드 렌더링 용 컴포넌트이다.
    웹브라우저에서 사용하는 라우터 BrowserRouter 컴포넌트 안에 감싼다.
    서버사이드 라우터는 StaticRouter이다.
*/

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'components/App';

import {Provider} from 'react-redux';
import configure from 'store/configure';

const Root = () => {

    return (
        <Provider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;