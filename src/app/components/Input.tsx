import React, { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
	errors?: string;
}

const Input = ({ errors, ...props }: InputProps) => {
	return (
		<>
			<div className='flex justify-between items-end'>
				<label
					htmlFor={props.name}
					className='text-sm font-medium mt-2'
				>
					{props.alt}
				</label>
				<span className='text-sm text-red-500 font-medium'>{errors}</span>
			</div>
			<input
				{...props}
				className={`outline-none focus:border-primary-color border rounded-md w-full p-4 border-input-color placeholder:text-input-color ${
					errors && 'border-red-500 focus:border-red-500 text-red-500'
				} `}
			/>
		</>
	);
};

export default Input;
