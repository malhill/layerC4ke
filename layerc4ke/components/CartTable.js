import Image from "next/image"
import formatMoney from "../lib/formatMoney";
import {FaTrash} from 'react-icons/fa';
import { CartTableStyles } from "../styles/cartTable.styled";

export default function CartTable({ user }) {
    return (
        <CartTableStyles>
            <table>
                <caption>{user.email}'s Cart</caption>
                <thead>
                    <tr>
                        <th colSpan={2}>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {user.cart.map( (cartItem) => (
                        <tr key={cartItem.product._id}>
                            <td>
                                <div>
                                    <Image src={`/images/${cartItem.product.image}`} height={200} width={200} />
                                    {cartItem.size &&
                                        <p>{cartItem.size}</p>    
                                    }
                                </div>
                            </td>
                            <td className="product-name">
                                <h3>{cartItem.product.name}</h3>
                            </td>
                            <td>
                                <p>{cartItem.quantity}</p>
                                {/* <form className="quantity">
                                    <input type="number" min="1" max="10" value={cartItem.quantity}></input>
                                </form> */}
                            </td>
                            <td className="product-price">
                                <p>{formatMoney(cartItem.product.price)}</p>
                            </td>
                            <td>
                            <button className="icon-button">
                                <FaTrash className="icon"/>
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>   
            </table>
        </CartTableStyles>
    )
}