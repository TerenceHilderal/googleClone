/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;
		console.log(term);

		if (!term) return;
		router.push(`/search?term=${term}`);
	};

	return (
		<div className='flex flex-col justify-center h-screen'>
			<Head>
				<title>Google Clone</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* header */}
			<header className='flex p-5 justify-between text-sm text-gray-700'>
				<div className='flex space-x-4 items-center'>
					<p className='link'>About</p>
					<p className='link'>Store</p>
				</div>

				<div className='flex space-x-4 items-center'>
					<p className='link'>Gmail</p>
					<p className='link'>Images</p>

					<ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer ' />

					<Avatar url='http://hilderal.terence.free.fr/Images/informaticien.jpg' />
				</div>
			</header>
			{/* body */}

			<form action='' className='flex flex-col items-center mt-[7%] flex-grow'>
				<Image
					src='/googlelogo.png'
					alt='google logo'
					quality='100'
					width={300}
					height={100}
				/>

				<div
					className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
				 border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'
				>
					<SearchIcon className='h-5 mr-4' />
					<input
						ref={searchInputRef}
						type='text'
						className='focus:outline-none flex-grow'
					/>
					<MicrophoneIcon className='h-5' />
				</div>

				<div
					className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
				 sm:flex-row sm:space-x-4'
				>
					<button className='btn' onClick={search}>
						Google Search
					</button>

					<button className='btn'> I'm feeling lucky</button>
				</div>
			</form>
			{/* footer */}
			<Footer />
		</div>
	);
}
