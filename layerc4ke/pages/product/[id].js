import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';

const SINGLE_ITEM_QUERY = gql `
    query getProductById($id: ID!) {
    getProductById(_id: $id) {
        _id
        name
        description
        price
        image
    }
}
`;

export default function SingleProduct({ query }) {
    let id = query.id;

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: { id: id }
    });

    if ( loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    
    return (
        <div>
            <h1>{data.getProductById.name}</h1>
            <Image src={`/images/${data.getProductById.image}`} width={400} height={400} />
            <p>{data.getProductById.description}</p>
            <p>{data.getProductById.price}</p>
        </div>
    )
}