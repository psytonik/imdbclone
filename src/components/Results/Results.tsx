import React from 'react';
import {Card} from "@/components";

const Results = ({results}: { results:ResponseFromServer[] }) => {
	return (
		<div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
			{results && results.map((result:any)=>{
				return (<Card key={result.id} componentData={result}/>)
			})}
		</div>
	);
};

export default Results;
