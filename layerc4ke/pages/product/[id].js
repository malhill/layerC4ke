import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import { useState } from 'react';
import formatMoney from '../../lib/formatMoney';

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
    const [sizeChosen, setSizeChosen] = useState("Medium");

    let id = query.id;

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: { id: id }
    });

    if ( loading) return <p>"Loading..."</p>;
    if (error) return `Error! ${error.message}`;

    const handleChange = (event) => {
        setSizeChosen(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create Cart Type in schema and add Cart model to database
        // Create Add To Cart mutation in both schema/resolvers
        // Run Add To Cart mutation on submit
    }

    return (
        <div>
            <h1>{data.getProductById.name}</h1>
            <Image src={`/images/${data.getProductById.image}`} width={400} height={400} />
            <p>{data.getProductById.description}</p>
            <p>{formatMoney(data.getProductById.price)}</p>
            
            {data.getProductById.sizes[0] &&
                <form onSubmit={handleSubmit}>
                    <select value={sizeChosen} onChange={handleChange}>
                        {data.getProductById.sizes.map( (size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                    <br></br>
                    <input type="submit" value="Add To Cart" />
                </form>
            }
        </div>
    )
}