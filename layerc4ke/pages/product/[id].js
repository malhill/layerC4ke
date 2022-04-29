import { useMutation, gql } from '@apollo/client';
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
    const [mutationFunction, { data, loading, error }] = useMutation(ADD_TO_CART)

    function logCartItem() {
        console.log('product:',query.id)
        console.log('quantity:', 1)
        logSize();
    }

    function getSize() {
        const sizeChosen = document.getElementById('sizeList');
        if (!sizeChosen) {
            return null
        } else {
            return sizeChosen.value
        }
    }

    function logSize() {
        const sizeChosen = document.getElementById('sizeList');
        console.log('size: ',getSize());
    }

    return (
        <Product>
            <SingleProduct query={query}/>
            {/* <button onClick={logCartItem}> Log Cart Item</button>
            <form onSubmit={e => {
                e.preventDefault();
                mutationFunction({
                    variables: {
                        product: query.id,
                        quantity: 1,
                        size: getSize()
                    }
                });
                window.alert('Product successfully added to cart')
                window.location.assign('/')
            }}
            >
                <button type='submit'>Add To Cart</button>
            </form> */}
        </Product>
    )
}