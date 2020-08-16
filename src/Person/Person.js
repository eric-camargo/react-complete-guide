import React from 'react';

const Person = (props) => {
	return (
		<div>
			<p>Trying out the props.<br />I'm {props.name}</p>
			<p>{props.children}</p>
		</div>
	)
};

export default Person;
