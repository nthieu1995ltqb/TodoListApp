import React from 'react';
import '../css/todo.css';
import {Link} from 'react-router-dom';

class TaskItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isImportant: false,
            isSeclect: false,
            isAction: false
        }        
    }

    // toggleImportant = () => {
    //     this.setState({
    //         isImportant: !this.state.isImportant
    //     })
    // }

    onSeclect = () => {
        this.setState({
            isSeclect: !this.state.isSeclect
        })
    }

    onAction = (e) => {
        this.setState({
            isAction: !this.state.isAction
        })
    }
    
    onDelete = (id) =>{
        if (confirm('Are you sure delete this task?')) { //eslint-disable-line
            this.props.onDelete(id);
            this.setState({
                isAction: !this.state.isAction
            })
        }
    }

    onEdit = (id) =>{
        this.props.onEdit(id)
    }

    onImportant = (id) => {
        this.props.onImportant(id);
        // this.toggleImportant();
    }

    render(){
        var { id, name, hour, minutes, date, month, year, important, status } = this.props.task;
        var { isSeclect, isAction } = this.state;
        return(  
            <tr>
                <td style={{width: '5%'}} onClick={this.onSeclect}>
                    {isSeclect ? <i class="fa fa-check" aria-hidden="true"></i> : ''}
                </td>
                <td>{name}</td>
                <td>{hour}:{minutes}</td>
                <td>{date}/{month}/{year}</td>
                <td onClick={()=>this.onImportant(id)}>
                    {important ? <Link to="#"><i className="fa fa-star"></i></Link> :  <Link to="#"><i className="fa fa-star-o"></i></Link>}
                </td>
                <td><Link to="#" onClick={this.onAction}><i className="fa fa-ellipsis-v"></i></Link> 
                { isAction ? <div className="box-action">
                    <ul className="list-action">
                      <li onClick={() => this.onEdit(id)}><Link to="/">Edit</Link></li>
                      <li onClick={() => this.onDelete(id)}><Link to="/">Delete</Link></li>
                    </ul>
                </div> : <div></div> }
                </td>
            </tr>
        )
    } 
}

export default TaskItem;