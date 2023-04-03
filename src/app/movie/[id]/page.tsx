import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {getMovieById} from "@/utils/GetMovies";
import Image from "next/image";



const MoviePage = async ({params}:Params) => {
	const movieId = params.id;
	const movie = await getMovieById(movieId);
	console.log(movie)
	return (
		<div className="w-full ">
			<div className="py-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6"></div>
			<Image
				src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
				alt={movie.title || movie.original_title || movie.name || 'Not Available'}
				width={500}
				height={300}
				className="rounded-lg"
				placeholder="blur"
				blurDataURL="/spinner.svg"
				style={{maxWidth:'100%',height:'100%'}}
			></Image>
			<div className="p-2 ">
				<h2 className="text-lg mb-3 font-bold">{movie.original_title || movie.title}</h2>
				<p className="text-lg mb-3">
					<span className="font-semibold mr-1">Overview:</span>
					{movie.overview}
				</p>
				<p className="mb-3 ">
					<span className="font-semibold mr-1 ">Release Date:</span>
					{movie.release_date || movie.first_air_date}
				</p>
				<p className="mb-3 ">
					<span className="font-semibold mr-1 ">Rating:</span>
					{movie.vote_count}
				</p>
			</div>

		</div>
	);
};

export default MoviePage;
