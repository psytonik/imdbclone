import React from 'react';

const Results = ({results}:any) => {
	return (
		<div>
			{results && results.map((r: any)=>(<div key={r.id}>
				{r.original_title}
			</div>))}
		</div>
	);
};

export default Results;
