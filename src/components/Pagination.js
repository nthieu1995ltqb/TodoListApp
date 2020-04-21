import React from 'react';
import '../css/todo.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';

const addNumberPage = (tasks, x) => {
		var index = Math.ceil(x/9);
		for(var i = 1; i <= index; i++){
			tasks.push(i);
		}
		tasks = tasks.splice(0, x - index)
		return tasks
	}

class Pagibation extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: []
		}
	}

	activePage = (index) => {
        this.props.fetchPageTasks(index + 1);
	}

    render(){
    	var { page } = this.state;
    	var showNumberPage = addNumberPage(page, this.props.tasks.length).map((page, index) => {
    		return <Link to="#" key={index} onClick={()=>this.activePage(index)}>{page}</Link>
    	})
        return(
            <div className='list-pagination'>
                {showNumberPage}
            </div>
        )
    }
}

	const mapStateToProps = (state) => {
		return {
			tasks: state.allTasks
		}
	}

    const mapDispatchToProps = (dispatch, props) =>{
        return {
            fetchPageTasks: (index) => {
                dispatch(actions.fetchTaskPageRequest(index));
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Pagibation);