import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hour: 0,
            minutes: 0,
            seconds: 0,
            date: 0,
            month: 0,
            year: 0,
            text: ''
        }
    }
    componentDidMount(){
        setInterval(() => this.getTime(), 1000);
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                text: itemEditing.name,
                hour: itemEditing.hour,
                minutes: itemEditing.minutes,
                seconds: itemEditing.seconds,
                date: itemEditing.date,
                month: itemEditing.month,
                year: itemEditing.year,
                important: itemEditing.important
            })
        }
    }

    getTime = () =>{
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var d = today.getDate();
        var mth = today.getMonth();
        var y = today.getFullYear();
            m = this.addZero(m);
            s = this.addZero(s);
            d = this.addZero(d);
            mth = this.addZero(mth);
            this.setState({
                hour: h,
                minutes: m,
                seconds: s,
                date: d,
                month: mth,
                year: y
            })
    }

    addZero = (t) =>{
        if (t < 10) {
            t = '0' + t;
        }
        return t;
    }

    handlerText(){
        this.setState({
            text: ""
        })
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    //Them moi nhiem vu vao server

    onSubmit = (e) => {
        var { text, hour, minutes, seconds, date, month, year, id } = this.state
        var task = {
            id: id,
            name: text,
            hour: hour,
            minutes: minutes,
            seconds: seconds,
            date: date,
            month: month,
            year: year,
            important: false
        }
        this.handlerText();
        e.preventDefault();
        if(id){
            this.props.onUpdateTask(task)
        } else {
            this.props.onAddTasks(task);
        }
    }

    render(){
        var { hour, minutes, seconds, date, month, year, text } = this.state; 
        return(
            <div className='header'>
                <form onSubmit={this.onSubmit}>
                    <div className='row'>             
                        <div className='col-sm-6'>
                            <input  className='ip-new-task' 
                                type="text" 
                                placeholder='Nhập tên nhiệm vụ ... '
                                value={text}
                                onChange={this.onChange}/>    
                        </div>
                        <div className='col-sm-2'>
                            <span>
                                {hour} : {minutes} : {seconds}
                            </span>
                        </div>
                        <div className='col-sm-2'>
                            <span>
                                {month}/{date}/{year}
                            </span>
                        </div>
                        <div className='col-sm-2'>
                            <button type="submit" className="btn btn-info"><i className="fa fa-plus-square"></i>&nbsp;Thêm</button>
                        </div>
                    </div>    
                </form>                
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTasks : (task) => {
            dispatch(actions.addTaskRequest(task));
        },
        onUpdateTask : (task) => {
            dispatch(actions.updateTaskRequest(task))
        } 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);