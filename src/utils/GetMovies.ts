const API_KEY = process.env.API_KEY;

export const getMovieById = async (movieId:number):Promise<any> => {
	const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
	if(!response.ok){
		console.log(response, 'response')
		throw new Error()
	}
	return await response.json();
}

export const getMoviesByGenre = async (genre:string):Promise<any> => {
	const res = await fetch(`https://api.themoviedb.org/3/${
			genre === 'fetchTopRated' ? '/movie/top_rated' :'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`,
		{ next: { revalidate: 3600 }}
	);
	if(!res.ok){
		console.log(res, 'response')
		throw new Error()
	}
	return await res.json();
}
