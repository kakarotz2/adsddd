import React from 'react';
import './home.scss';
import Header from '../../Component/Header/header';
import Siderbar from '../../Component/Siderbar/siderbar';
import Main from '../../Component/FB-Main/Main';
import ListFriend from '../../Component/List-Friend/ListFriend';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="wrap-home">
                <Siderbar />
                <Main />
                <ListFriend />
            </div>
        </React.Fragment>
    );
}
export default Home;
