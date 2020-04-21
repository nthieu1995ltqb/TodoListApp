import React from 'react';
import ImportantItem from './ImportantItem';
import Pagination from './../Pagination';
import {connect} from 'react-redux';
import * as actions from './../../actions/actions';
import filterElement from './../../utils/filterElement';

class Important extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tasksImportant: []
		}
	}

    componentDidMount(){ 
        this.props.fetchTasksImportant();
    }

    onDelete = (id) => {
        this.props.onDeleteTask(id);
    }

    onEdit = (id) => {
        this.props.onEditTask(id);
    }

    onImportant = (id) => {
        this.props.onImportantTask(id)
    }
   
    render(){
    	var {tasksImportant} = this.props
        var showTaskList = filterElement(tasksImportant, tasksImportant.important).map((task, index) => {
            return <ImportantItem key={index} task={task} 
                                onEdit={this.onEdit} 
                                onDelete={this.onDelete}
                                onImportant={this.onImportant}/>
        })

        return(
             <div>
                  <table className="table table-striped">
                    <tbody>
                        { showTaskList }
                    </tbody>
                    </table>
                    <Pagination/>
             </div>
        )
    }
}


    const mapStateToProps = (state) =>{
        return {
           tasksImportant: state.tasks
        }
    }
    const mapDispatchToProps = (dispatch, props) =>{
        return {
            onEditTask: (id) => {
                dispatch(actions.editTaskRequest(id));
            },
            onImportantTask: (id) => {
                dispatch(actions.getImportantRequest(id))
            },
            fetchTasksImportant: () => {
                dispatch(actions.fetchTaskImportantRequest());
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Important);