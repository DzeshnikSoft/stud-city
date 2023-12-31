import React from 'react'
import Tab from './Tab'

const Tabs = ({ setActive, active, labels, className = 'text-2xl' }) => {
	return (
		<div className={`mt-3 rounded-xl bg-white flex w-full justify-around ${className}`}>
			{
				labels.map((label, index) => (
					<Tab
						key={index}
						label={label}
						isActive={active === index}
						toggle={() => setActive(index)}
					/>
				))
			}
		</div>
	)
}

export default Tabs