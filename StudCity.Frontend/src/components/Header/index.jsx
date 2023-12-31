import React from 'react';
import Avatar from '../../UI/Avatar';
import { NavLink, Link } from 'react-router-dom';
import { HEADER_LINKS } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const Header = ({ user }) => {
	const { t } = useTranslation();
	const linkStyles = 'text-2xl font-bold text-primaryAuthentication mr-4 relative';
	const { firstName, lastName, avatar } = user;

	return (
		<div className='h-full py-2 border-y-2 '>
			<div className='flex justify-between w-[95%] mx-auto items-center'>
				<div className='flex items-center'>
					<Link to='/' className='h-14 w-24 block mr-10'>
						<img src='/logo.png' className='h-full w-full' alt='studcity-logo' />
					</Link>
					<div>
						{HEADER_LINKS.map((item) => (
							<NavLink
								to={item.path}
								key={item.name}
								className={({ isActive }) => {
									return isActive ? `${linkStyles} text-primaryGold` : linkStyles;
								}}
							>
								{t(item.name)}
							</NavLink>
						))}
					</div>
				</div>

				{/* User info */}
				<Link
					to='/profile'
					className='flex items-center max-w-max justify-between cursor-pointer'
				>
					<h1 className='text-xl mr-4'>{`${firstName}  ${lastName}`}</h1>
					<Avatar src={avatar} className='h-14 w-14' />
				</Link>
			</div>
		</div>
	);
};

export default Header;
