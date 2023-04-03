const API_KEY = process.env.API_KEY;

export const getMovieById = async (movieId:number):Promise<ResponseFromServer> => {
	const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
	if(!response.ok){
		console.log(response, 'response')
		throw new Error()
	}
	return await response.json();
}

export const getMoviesByGenre = async (genre:string) => {
	const res = await fetch(`https://api.themoviedb.org/3/${
			genre === 'fetchTopRated' ? '/movie/top_rated' :'trending/all/week'}?api_key=${API_KEY}&language=en-US`,
		{ next: { revalidate: 3600 }}
	);
	if(!res.ok){
		console.log(res, 'response')
		throw new Error()
	}
	return await res.json();
}
export const getMovieBySearchQuery = async (query:string) => {

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`);

	if(!res.ok){
		console.log(res, 'response')
		throw new Error()
	}
	return await res.json();
}
