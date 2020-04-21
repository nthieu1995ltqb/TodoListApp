import React from 'react';
import '../../css/todo.css';
import {Link} from 'react-router-dom';

class ImportantItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSeclect: false,
            isAction: false
        }        
    }


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
    

    onEdit = (id) =>{
        this.props.onEdit(id)
    }

    onImportant = (id) => {
        this.props.onImportant(id);
    }

    render(){
        var { id, name, hour, minutes, date, month, year } = this.props.task;
        var { isSeclect, isAction } = this.state;
        return( 
           <tr>
                <td onClick={this.onSeclect}>
                    {isSeclect ? <Link to="#"><i className="fa fa-square-o"></i></Link> : <Link to="#"><i className="fa fa-check-square-o" aria-hidden="true"></i></Link>}
                </td>
                <td>{name}</td>
                <td>{hour}:{minutes}</td>
                <td>{date}/{month}/{year}</td>
                <td onClick={()=>this.onImportant(id)}>
                    <Link to="#"><i className="fa fa-star"></i></Link>
                </td>
                <td><Link to="#" onClick={this.onAction}><i className="fa fa-ellipsis-v"></i></Link> 
                { isAction ? <div className="box-action">
                    <ul className="list-action">
                      <li onClick={() => this.onEdit(id)}><Link to="/important">Edit</Link></li>
                    </ul>
                </div> : <div></div> }
                </td>
            </tr>

        )
    } 
}

export default ImportantItem;