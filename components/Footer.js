import { GlobeIcon } from '@heroicons/react/solid';

const Footer = () => {
	return (
		<footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
			{/* <GlobeIcon /> */}
			<div className='px-8 py-3'>
				<p>France</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3'>
				<div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2  '>
					{' '}
					<GlobeIcon className='h-5 mr-1 text-green-700' />
					Neutre en carbone depuis 2007
				</div>
				<div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
					<p>A propos</p>
					<p>Publicité</p>
					<p>Comment fonctionne la recherche Google</p>
				</div>
				<div className='flex justify-center space-x-8 whitespace-nowrap md:ml-auto'>
					<p>Confidentialité</p>
					<p>Conditions</p>
					<p>Settings</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
