import { useQuery, gql } from '@apollo/client';

export function DisplayLocation( ) {
	
    const GET_LOCATIONS = gql`
		query GetLocations {
			locations {
				id
				name
				description
				photo
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_LOCATIONS);
    // data is a Array of Object whci desired property on location { _ _ _ _ } 

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return data.locations.map(({ id, name, description, photo }) => (
		<div key={id}>
			<h3>{name}</h3>
			<img
				width='400'
				height='250'
				alt='location-reference'
				src={`${photo}`}
			/>
			<br />
			<b>About this location:</b>
			<p>{description}</p>
			<br />
		</div>
	));
}
