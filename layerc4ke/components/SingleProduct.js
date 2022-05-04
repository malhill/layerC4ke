import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
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
        <>
            <div class="image-container">
                <Image className='image' src={`/images/${data.getProductById.image}`} width="100%" height="100%" layout="responsive" objectFit='contain' />
            </div>

            <div className='product-info'>
                <h1>{data.getProductById.name}</h1>
                <p>{data.getProductById.description}</p>
                
                {data.getProductById.sizes[0] &&
                <select id='sizeList'>
                    {data.getProductById.sizes.map( (size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
                }

                <p className='price'>{formatMoney(data.getProductById.price)}</p>
                {/* Will be adding Redux for state management */}
                <button className='add-to-cart'>Add To Cart</button>
                
            </div>

        </>
    )
}