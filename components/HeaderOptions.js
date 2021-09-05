import HeaderOption from './HeaderOption';
import {
	MapIcon,
	NewsPaperIcon,
	PlayIcon,
	SearchIcon,
	DotsVerticalIcon,
	PhotographIcon,
} from '@heroicons/react/outline';
import { NewspaperIcon } from '@heroicons/react/outline';

const HeaderOptions = () => {
	return (
		<div
			className='flex w-full text-gray-700 justify-evenly text-sm
    lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    border-b-[1px]'
		>
			<div className='flex space-x-6'>
				<HeaderOption Icon={SearchIcon} title='Tout' selected />
				<HeaderOption Icon={PhotographIcon} title='Photos' />
				<HeaderOption Icon={PlayIcon} title='Vidéos' />
				<HeaderOption Icon={NewspaperIcon} title='Actualité' />
				<HeaderOption Icon={MapIcon} title='Maps' />
				<HeaderOption Icon={DotsVerticalIcon} title='Plus' />
			</div>

			<div className='flex space-x-4'>
				<p className='link'>Paramètres</p>
				<p className='link'>Outils</p>
			</div>
		</div>
	);
};

export default HeaderOptions;
