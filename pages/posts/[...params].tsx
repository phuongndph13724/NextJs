import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPostPageProps {}

export default function ParamsPostPage(props: ParamsPostPageProps) {
	const router = useRouter();
	return (
		<div>
			<h1>Params Post Page</h1>
			<p>Query : {JSON.stringify(router.query)}</p>
		</div>
	);
}
