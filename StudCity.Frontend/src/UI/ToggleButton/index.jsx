import React from "react";

export default function ToggleButton({ onChange, isToggle }) {
	return (
		<label
			className="relative inline-flex items-center my-auto cursor-pointer"
		>
			<input
				type="checkbox"
				value=""
				className="sr-only peer"
				checked={isToggle}
				onChange={onChange}
			/>
			<div
				className={`w-11 h-6 ${isToggle ? 'bg-green-700' : 'bg-primaryAuthentication/70'
					} dark:peer-focus:ring-transparent rounded-full peer dark:bg-customGray-700  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-customGray-600 peer-checked:bg-green-700 after:outline-0 after:border-0 outline-0 border-0 `}
			></div>
		</label>

	)
}
