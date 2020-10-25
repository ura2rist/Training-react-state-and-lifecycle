import React from 'react';
import ReactDOM from 'react-dom';

/*const name = {
		firstName: 'Юрий',
		lastName: 'Горячев'
	};
const element = (
	<div>
		<h1>Привет { formatName(name) }</h1>
		<h2>Как дела?</h2>
	</div>
	);

const creat = React.createElement(
	'h1',
	{className: 'bg'},
	'Привет мир'
);

function formatName(name) {
	return name.firstName + ' ' + name.lastName;
};

class GetName extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}*/

/*function GetName(props){
	return <h1>Hello { props.name }</h1>;
}*/

/*function App(){
	return (
		<div>
			<GetName name='Юрий'/>
			<GetName name='Иван'/>
		</div>
	);
}

const names = <GetName name='Юрий'/>;*/

function formatDate(date){
	return date.toLocaleDateString();
}

function Avatar(props){
	return (
		<img className='Avatar'
			src={ props.user.avatarUrl }
			alt={ props.user.name }
		/>
	);
};

function UserInfo(props){
	return (
		<div className='UserInfo'>
			<Avatar user={ props.user } />
			<div className='UserInfo-name'>
				{ props.user.name }
			</div>
		</div>
	);
}

function Comment(props){
	return (
		<div className='Comment'>
			<UserInfo user={ props.author } />
			<div className='Comment-text'>
				{ props.text }
			</div>
			<div className='Comment-date'>
				{ formatDate(props.date) }
			</div>
		</div>
	);
};

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl:'https://placekitten.com/g/64/64',
	},
}

ReactDOM.render(
	<Comment date={comment.date}
    text={comment.text}
    author={comment.author} />,
	document.getElementById('root-test')
);