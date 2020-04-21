import React from 'react';
import TaskItem from './TaskItem';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';

class TaskList extends React.Component {

    componentDidMount(){ 
        this.props.fetchAllTasks();       
        this.props.fetchPageTasks();
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
        var showTaskList = this.props.tasks.map((task, index) => {
            return <TaskItem key={index} task={task} 
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
           tasks: state.tasks
        }
    }
    const mapDispatchToProps = (dispatch, props) =>{
        return {
            fetchAllTasks: () => {
                dispatch(actions.fetchAllTaskRequest());
            },
            fetchPageTasks: () => {
                dispatch(actions.fetchTaskPageRequest());
            },
            onDeleteTask: (id) => {
                dispatch(actions.deleteTaskRequest(id));
            },
            onEditTask: (id) => {
                dispatch(actions.editTaskRequest(id));
            },
            onImportantTask: (id) => {
                dispatch(actions.getImportantRequest(id))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);