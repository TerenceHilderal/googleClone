import Head from 'next/head';
import Header from '../components/Header';
import Response from '../Response';
import { useRouter } from 'next/dist/client/router';
import SearchResults from '../components/SearchResults';

const Search = ({ results }) => {
	console.log(results);
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term}- Google Search</title>
			</Head>

			<Header />

			<SearchResults results={results} />
		</div>
	);
};

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false;

	const startIndex = context.query.start || '0';

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
		  ).then((res) => res.json());

	// after the SERVER has rendered... pass the results to the client

	return {
		props: {
			results: data,
		},
	};
}
