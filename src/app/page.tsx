import { Results } from '@/components';
import React from 'react';

const API_KEY = process.env.API_KEY;
const Home = async({searchParams}:any) => {
	const genre = searchParams.genre || 'fetchTrending';
	const res = await fetch(`https://api.themoviedb.org/3/${
		genre === 'fetchTopRated' ? '/movie/top_rated' :'trending/all/week'
		}?api_key=${API_KEY}&language=en-US&page=1`,{ next: { revalidate: 3600 }});

	if(!res.ok){
		console.log(res, 'response')
		throw new Error()
	}
	const data = await res.json();
	return (
		<div>
			<Results results={data.results}/>
		</div>
	);
};

export default Home;
