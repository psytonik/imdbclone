import React from 'react';
import {getMovieBySearchQuery} from "@/utils/GetMovies";
import {Results} from "@/components";

const SearchResults = async ({params}:any) => {
	const {searchTerm} = params;

	const movie = await getMovieBySearchQuery(searchTerm);
	const {results} = await movie;

	return (
		<div>
			{results && results.length === 0 && (
				<h1 className="text-center pt-6">Nothing Found</h1>
			)}

			{results && (<Results results={results} />)}
		</div>
	);
};

export default SearchResults;
