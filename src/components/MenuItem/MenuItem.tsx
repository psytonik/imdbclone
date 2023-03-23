import Link from 'next/link';
import React, {FC} from 'react';

const MenuItem:FC<{title:string,address:string, Icon:any}> = ({title, address, Icon}) => {
	return (
		<div>
			<Link title={title} href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
				<Icon className="text-2xl sm:hidden mx-4"/>
				<p className="hidden sm:inline my-2 text-sm">{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;
