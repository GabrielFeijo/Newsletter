import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
}

const Button = ({ className, children, ...props }: IButtonProps) => {
	const buttonClassName = twMerge(
		className,
		'bg-primary-color w-full text-white font-medium py-4 rounded-xl    hover:bg-linear-color'
	);
	return (
		<button
			{...props}
			className={`${buttonClassName}  `}
		>
			{children}
		</button>
	);
};

export default Button;
