import React from 'react';
import '../css/todo.css';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import countArray from './../utils/countArray';

const listTab = [
	{
		name: 'Tất cả',
		to: '/',
		exact: true
	},
	{
		name: 'Quan trọng',
		to: '/important',
		exact: false
	}		
];

const MenuLink = ({label, to, activeOnlyExact, length}) => {
	return (
		<Route
			path={to}
			exact={activeOnlyExact}
			children={({match}) => {
				var active = match ? 'active' : '';
				return (
					<li className={active}>
						<Link to={to}>
							{label}
						</Link>
					</li>
				) 
			}}
		/>	
	);
}

class Aside extends React.Component {

	onShowMenu = () => {
		this.props.onShowMenu()
	}
    render(){
    	var {tasks} = this.props;
    	var numberElementImportant = countArray(tasks, tasks.important);
        return(
             <div className="container">

	             <i className="fa fa-bars" aria-hidden="true" onClick={this.onShowMenu}></i>
	             	<div className='row box-menu-list'>
		             	<div className='col-sm-10 col-md-10 col-lg-10 col-xl-10'>
							<ul className='list-menu-aside'>
								{this.showListTab(listTab)}
							</ul>
		             	</div>
		             	<div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
							<ul className='list-menu-aside'>
								<li>({tasks.length})</li>
								<li>({numberElementImportant})</li>
							</ul>
		             	</div>
	             	</div>
             </div>
        )
    };

    showNumber = (number) => {
    	var n = null;
    	if (number === 1) {
    		n = this.props.tasks.length
    	} else if (number === 3) {
    		n = this.props.importants.length
    	}
    	return n;
    }

    showListTab = (listTab) => {
    	var result = null;
    	if (listTab.length > 0) {
    		result = listTab.map((menu, index) => {
    			return (
    				<MenuLink
    					key={index}
    					label={menu.name}
    					to={menu.to}
    					activeOnlyExact={menu.exact}
    					length={this.showNumber(menu.number)}
    				/>
    			)
    		})
    	}
    	return result;
    }
}

    const mapStateToProps = (state) =>{
        return {
           tasks: state.allTasks
        }
    }

export default connect(mapStateToProps, null)(Aside);