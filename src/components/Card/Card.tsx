import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

const Card = ({componentData}:{componentData:ResponseFromServer}) => {
	return (
		<div className="cursor-pointer  sm:hover:shadow-slate-400
		sm:shadow-md rounded-lg sm:border sm:border-slate-400
		transition-shadow duration-200 group sm:p-3 sm:m-2">
			<Link href={`/movie/${componentData.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${componentData.backdrop_path || componentData.poster_path}`}
					alt={componentData.title || componentData.original_title || 'Not Available'}
					width={500}
					height={300}
					className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 object-cover h-32"
					placeholder="blur"
					blurDataURL="/spinner.svg"
					style={{width:'100%'}}
				></Image>
				<div className="p-2">
					<p className="line-clamp-2 text-md">{componentData.overview}</p>
					<h2 className="truncate text-lg font-bold">{componentData.title || componentData.original_title || componentData.name ||'No Title'}</h2>
					<p className="flex items-center">
						{componentData.release_date || componentData.first_air_date || 'TBA'}
						<FiThumbsUp className="h-5 mr-1 ml-3"/> {componentData.vote_count}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
