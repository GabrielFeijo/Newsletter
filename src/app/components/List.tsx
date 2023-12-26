import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

const List = ({ text }: { text: string }) => {
	return (
		<div className='flex items-center gap-2 mb-1'>
			<span>
				<CheckCircleIcon className='w-7 h-7 text-secondary-color' />
			</span>
			<p className='font-normal'>{text}</p>
		</div>
	);
};

export default List;
