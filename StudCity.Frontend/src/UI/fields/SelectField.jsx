import React from 'react';
import Option from './Option';

const SelectField = ({ options, value, onChange, placeholder = '', className = '' }) => {
	return (
		<select
			className={`active:border-none w-full static active:border-primaryAuthentication focus:border-primaryAuthentication text-primaryAuthentication my-3 outline-none h-12 px-3 py-1 font-normal rounded-2xl border-solid border-2 placeholder:decoration-[#A0A9AB] text-base border-customGray ${className}`}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		>
			{options?.map((option, index) => {
				return index === 0 ? (
					<Option key={option} isSelected={true}>
						{option}
					</Option>
				) : (
					<Option key={option}>{option}</Option>
				);
			})}
		</select>
	);
};

export default SelectField;
