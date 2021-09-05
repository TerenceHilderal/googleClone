import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className='sticky top-0 bg-white'>
			<div className='flex p-6 items-center w-full'>
				<Image
					className='cursor-pointer'
					onClick={() => router.push('/')}
					src='https://proofmart.com/wp-content/uploads/2021/06/google-logo-web.png'
					height={70}
					width={120}
					alt='google logo'
				/>

				<form
					className='flex flex-grow px-6 py-3 ml-10 mr-5 border
        border-gray-200 rounded-full shadow-lg max-w-3xl items-center'
				>
					<input
						className='flex-grow w-full focus:outline-none'
						ref={searchInputRef}
						type='text'
					/>
					<XIcon
						className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100
            transform hover:scale-125'
						onClick={() => (searchInputRef.current.value = '')}
					/>
					<MicrophoneIcon
						className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4
           border-gray-300'
					/>
					<SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
					<button className='hidden' type='submit' onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					className=' ml-auto'
					url='http://hilderal.terence.free.fr/Images/informaticien.jpg'
				/>
			</div>
			<HeaderOptions />
		</header>
	);
};

export default Header;
