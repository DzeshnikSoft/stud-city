import React, { useState } from 'react';
import TextField from './TextField';
import { useTranslation } from 'react-i18next';

const ValidateTextField = ({
	setDisabled = null,
	validator,
	withErrorMessage = true,
	onChange,
	value,
	...custom
}) => {
	const { t } = useTranslation();
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e) => {
		if (withErrorMessage) {
			onChange(e.target.value);
			const message = validator(e.target.value);
			setErrorMessage(t(message));

			if (setDisabled) {
				if (message.length !== 0) setDisabled(true);
				else setDisabled(false);
			}

			return;
		}

		const value = validator(e.target.value);
		if (setDisabled) {
			if (value.lenмgth === 0) setDisabled(true);
			else setDisabled(false);
		}

		onChange(value);
	};

	return (
		<div className='flex flex-col relative'>
			<TextField onChange={handleChange} value={value} {...custom} />
			{withErrorMessage && (
				<p className='text-center text-xs -mt-2 text-[#eb4848] mb-1 absolute -bottom-2 w-full'>
					{' '}
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default ValidateTextField;
