import { Results } from '@/components';
import React from 'react';
import {getMoviesByGenre} from "@/utils/GetMovies";

const Home = async({searchParams}:any) => {
	const genre:string = searchParams.genre || 'fetchTrending';
	const data = await getMoviesByGenre(genre)
	return (
		<div>
			<Results results={data.results}/>
		</div>
	);
};

export default Home;
