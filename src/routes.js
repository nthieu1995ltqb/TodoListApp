import React from 'react';
import TaskList from './components/TaskList';
import MyDay from './components/Tab/MyDay';
import Important from './components/Tab/Important';
import Planed from './components/Tab/Planed';
import History from './components/Tab/History';

const routes = [
	{
		path: "/",
		exact: true,
		main: () => <TaskList/>
	},		
	{
		path: "/myday",
		exact: true,
		main: () => <MyDay/>
	},
	{
		path: "/important",
		exact: true,
		main: () => <Important/>
	},
	{
		path: "/planed",
		exact: true,
		main: () => <Planed/>
	},
	{
		path: "/history",
		exact: true,
		main: () => <History/>
	}		
]

export default routes;