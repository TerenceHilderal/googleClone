/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Avatar = ({ url }) => {
	return (
		<>
			{/* <Image
			className=' cursor-pointer transition duration-150 transform hover:scale-110'
			src={url}
			loading='lazy'
			width={40}
			height={40}
			alt='profile pic'
		/> */}
			<img
				className=' h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
				src={url}
				loading='lazy'
				alt='profile pic'
			/>
		</>
	);
};

export default Avatar;
