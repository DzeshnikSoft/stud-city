import React from "react";

function TextField({ className = "", placeholder, type, required, handleChange, maxLength, value = "" }) {
	return (
		<div className = "relative text-[#506466]" >
			<input
				className = {`active:border-none w-full static active:border-primaryAuthentication focus:border-primaryAuthentication text-primaryAuthentication my-3 outline-none h-12 px-3 py-1 font-normal rounded-2xl border-solid border-2 placeholder:decoration-[#A0A9AB] text-base border-[#D1D7D4] ${className}`}
				type = {type}
				placeholder = {placeholder}
				value = {value}
				required = {required}
				onChange = {handleChange}
				maxLength = {maxLength}
			/>
		</div>
	);
}

export default TextField;
