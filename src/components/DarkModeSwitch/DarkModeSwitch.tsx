'use client';
import { useTheme } from 'next-themes';
import React, {useEffect, useState} from 'react';
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs';
const DarkModeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme: theme;
	const [mounted,setMounted] = useState(false);
	useEffect(()=>setMounted(true),[]);

	if (!mounted) {
		return null
	}
	return (
		<>
			{mounted && (currentTheme === 'light' ?(
				<BsFillMoonStarsFill
					className="text-2xl cursor-pointer hover:text-amber-500"
					onClick={() => setTheme('dark')}/>
			):(
				<BsFillSunFill
					className="text-2xl cursor-pointer hover:text-amber-500"
					onClick={() => setTheme('light')}/>
			))}


		</>
	);
};

export default DarkModeSwitch;
