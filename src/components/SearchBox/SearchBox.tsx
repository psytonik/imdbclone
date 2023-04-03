'use client';
import React, {FormEvent, useState} from 'react';
import {useRouter} from "next/navigation";

const SearchBox = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const router = useRouter();
	const handleSubmit = (e:FormEvent) => {
		e.preventDefault();
		if(!searchQuery) {
			return;
		}
		router.push(`/search/${searchQuery}`);
		setSearchQuery('');
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex max-w-6xl mx-auto justify-between items-center px-5">
			<input
				type="text"
				placeholder="Search keywords..."
				className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
				value={searchQuery}
				onChange={(e)=>setSearchQuery(e.target.value)}
			/>
			<button
				disabled={!searchQuery}
				type="submit"
				className="text-amber-500 disabled:text-gray-400"
			>Search</button>
		</form>
	);
};

export default SearchBox;
