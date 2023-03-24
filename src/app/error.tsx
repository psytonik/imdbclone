'use client';
import React, {useEffect} from 'react';

const Error = ({error, reset}: { error: Error, reset: ()=>void }) => {

	useEffect(() => {
		console.error(error)
	}, [error]);


	return (
		<div className="text-center mt-10">
			<h2>Something went wrong</h2>
			<button onClick={()=>reset()} className="hover:text-amber-600">Try Again</button>
		</div>
	);
};

export default Error;
