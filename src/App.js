import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, HashRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {Suspense} from 'react'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Ленивая загрузка
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Ленивая загрузка

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        // console.log(prop)
        if (!this.props.initialized){
            return <Preloader/>
        }
        /*Вместо Hash на обычном сервере BrowserRouter*/
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {/*<Route path='/profile' component={Profile}/>*/}
                        {/*<Route path='/dialogs' component={Dialogs}/>*/}

                        <Route path='/profile/:userID?' render={() =>
                            <Suspense fallback={<div>loading ...</div>}>
                                <ProfileContainer />
                            </Suspense>}/>
                        <Route path='/dialogs' render={() =>
                            <React.Suspense fallback={<Preloader />}>
                                <DialogsContainer />
                            </React.Suspense>
                        }/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);