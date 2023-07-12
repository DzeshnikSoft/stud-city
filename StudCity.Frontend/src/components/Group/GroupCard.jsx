import React from 'react'
import GridCard from './GridCard'
import ListCard from './ListCard'

const GroupCard = ({ group, handleClick, viewMode }) => {

	const stylesContainerCardMode = {
		grid: "duration-200 hover:scale-90 h-60",
		list: "h-36 mt-5 w-11/12 mx-auto duration-200 hover:scale-105",
	}

	const renderCardMode = {
		grid: <GridCard group={group} />,
		list: <ListCard group={group} />,
	}

	return (
		<div className={`shadow-form flex w-full rounded-xl relative cursor-pointer overflow-hidden ${stylesContainerCardMode[viewMode]}`}
			onClick={() => handleClick()}
		>
			<div className="w-full h-60">
				<div className='h-1/2 w-full rounded-t-xl relative'>
					<img src={group.image} alt="" className='h-full w-full rounded-t-xl' />
					<div className='absolute bg-white h-7 w-7 top-2 right-2 rounded shadow-form flex justify-center items-center'>
						{group.isPrivate
							? <i className="fa-solid fa-lock"></i>
							: <i className="fa-solid fa-lock-open"></i>}
					</div>
				</div>
				<div className='w-full h-1/2'>
					<div className='flex flex-col p-3'>
						<h1 className='text-lg font-bold'>{group.name}</h1>
						<p className='text-base text-customGray-400'>Participants: {group.usersCount}</p>
					</div>
				</div>
			</div>
			{isActive && <div className='rounded-xl absolute bg-[#453e354d] top-0 left-0 w-full h-full flex'>
				<i className="m-auto z-20 text-white text-6xl fa-solid fa-badge-check"></i>
			</div>}
		</div>
	)
}

export default GroupCard