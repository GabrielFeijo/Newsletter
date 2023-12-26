'use client';

import React from 'react';
import Button from '../components/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';

const Success = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get('email');

	const handleClick = () => {
		router.push('/');
	};

	return (
		<div className='flex justify-center items-center h-screen mx-10'>
			<section className='bg-white p-10 text-primary-color rounded-2xl '>
				<CheckCircleIcon className='w-20 h-20 text-secondary-color' />
				<h1 className='font-extrabold text-5xl max-w-96 mt-6'>
					Thanks for subscribing!
				</h1>
				<p className='mt-6 max-w-96'>
					A confirmation email has been sento to{' '}
					<span className='font-medium'>{email}</span>. Please open it and clock
					the button inside to confirm your subscription.
				</p>

				<Button
					className='mt-8'
					onClick={handleClick}
				>
					Dismiss message
				</Button>
			</section>
		</div>
	);
};

export default Success;
