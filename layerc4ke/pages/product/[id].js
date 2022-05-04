import { gql } from '@apollo/client';
import SingleProduct from '../../components/SingleProduct';
import { Product } from '../../styles/SingleProduct.styled';

const ADD_TO_CART = gql`
    mutation addToCart($product: ID!, $quantity: Int!, $size: String) {
        addToCart(product: $product, quantity: $quantity, size: $size) {
            cart {
                product {
                    name
                }
                quantity
                size
            }
        }
    }
`;

export default function SingleProductPage({ query }) {

    return (
        <Product>
            <SingleProduct query={query}/>
        </Product>
    )
}