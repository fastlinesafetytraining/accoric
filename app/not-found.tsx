import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='h-[80vh] p-20 flex flex-col items-center justify-center text-center'>
			<h1 className='font-bold'>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link href="/" className='rounded-3xl bg-blue-500 text-white px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>
				Go back to Home
			</Link>
		</div>
	);
}