'use client';

import { useRouter } from 'next/navigation';
import Button from './components/Button';
import Input from './components/Input';
import List from './components/List';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();

	const [email, setEmail] = useState<string>();
	const [errors, setErrors] = useState<string>();

	const handleClick = () => {
		const email_regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!email) {
			return setErrors('Required field!');
		}

		if (!email_regex.test(email)) {
			return setErrors('Invalid Email');
		}

		router.push(`/success?email=${encodeURIComponent(email)}`);
	};
	return (
		<div className='flex justify-center items-center h-screen mx-10'>
			<section className='bg-white p-8 text-primary-color rounded-2xl flex items-center gap-8'>
				<div>
					<h1 className='font-extrabold text-5xl'>Stay updated!</h1>
					<p className='mt-6 max-w-96'>
						Join 60,000+ product managers receiving monthly updates on:
					</p>

					<div className='my-8 '>
						<List text='Product discovery and building what matters' />
						<List text='Measuring to ensure updates are a success' />
						<List text='And much more!' />
					</div>

					<Input
						alt='Email address'
						id='email'
						name='email'
						placeholder='email@company.com'
						errors={errors}
						value={email}
						onChange={(e) => {
							setErrors('');
							setEmail(e.target.value);
						}}
					/>

					<Button
						className='mt-8'
						onClick={handleClick}
					>
						Subscribe to monthly newsletter
					</Button>
				</div>

				<div className='h-[29rem] bg-red-400 w-80 hidden md:block '>
					<div className='bg-stats bg-cover h-full w-full bg-right'></div>
				</div>
			</section>
		</div>
	);
}
