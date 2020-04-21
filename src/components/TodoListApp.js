import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';
import Header from './Header';
import Aside from './Aside';
import routes from './../routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class TodoListApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isShowMenu: true
        }
    }
    componentDidMount(){        
        this.props.fetchAllTasks();
        this.props.fetchPageTasks();
    }

    onShowMenu = () => {
        this.setState({
            isShowMenu: !this.state.isShowMenu
        })
    }

    showTabContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                    component = {route.main}
                />);    
            })
        }
        return <Switch>{result}</Switch>
    }

    render(){
        var { isShowMenu } = this.state;
        return(
            <Router>
                <div style={{marginTop: '10px'}} className='container'>
                    <div className='row'>
                        <div className={ isShowMenu ? 'col-sm-3 aside' : ''}>
                            { isShowMenu ? <Aside onShowMenu={this.onShowMenu}/> : ''}
                        </div>
                        <div className={ isShowMenu ? 'col-sm-9' : 'col-sm-12'}  style={{border:'1px solid #dee2e6'}}>
                            {isShowMenu ? 
                                <div>
                                    <Header/> { this.showTabContent(routes) }
                                </div> :
                                <div className='row'>
                                    <div className='col-sm-1'>
                                        <i className="fa fa-bars" aria-hidden="true" onClick={this.onShowMenu}></i>
                                    </div>
                                    <div className='col-sm-11'>
                                        <Header/>
                                        { this.showTabContent(routes) }
                                    </div>
                                </div>}
                        </div>
                    </div>              
                </div>
            </Router>
        )
    }
}

    const mapDispatchToProps = (dispatch, props) =>{
        return {
            fetchAllTasks: () => {
                dispatch(actions.fetchAllTaskRequest());
            },
            fetchPageTasks: () => {
                dispatch(actions.fetchTaskPageRequest());
            }
        }
    }

export default connect(null, mapDispatchToProps)(TodoListApp);