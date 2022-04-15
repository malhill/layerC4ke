import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import { useState } from 'react';
import formatMoney from '../lib/formatMoney';

const SINGLE_ITEM_QUERY = gql `
    query getProductById($id: ID!) {
    getProductById(_id: $id) {
        _id
        name
        description
        price
        image
        sizes
    }
}
`;

export default function SingleProduct({ query }) {
    let id = query.id;

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: { id: id }
    });

    if ( loading) return <p>"Loading..."</p>;
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <h1>{data.getProductById.name}</h1>
            <Image src={`/images/${data.getProductById.image}`} width={400} height={400} />
            <p>{data.getProductById.description}</p>
            <p>{formatMoney(data.getProductById.price)}</p>
            
            {data.getProductById.sizes[0] &&
                <select id='sizeList'>
                    {data.getProductById.sizes.map( (size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            }
        </div>
    )
}