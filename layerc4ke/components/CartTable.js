import Image from "next/image"
import {FaTrash} from 'react-icons/fa';
import { CartTableStyles } from "../styles/cartTable.styled";

export default function CartTable() {
    return (
        <CartTableStyles>
            <table>
                <caption>Test Cart</caption>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Info</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Image src="/images/Strawjamz_1024x1024@2x.png" height={200} width={200} /> </td>
                        <td>A Strawberry Jamz<p>Size: Medium</p></td>
                        <td>1</td>
                        <td>$19.99</td>
                        <td>
                            <button className="icon-button">
                                <FaTrash className="icon"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><Image src="/images/Strawjamz_1024x1024@2x.png" height={200} width={200} /> </td>
                        <td>A Strawberry Jamz</td>
                        <td>1</td>
                        <td>$19.99</td>
                        <td>
                            <button className="icon-button">
                                <FaTrash className="icon"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><Image src="/images/Strawjamz_1024x1024@2x.png" height={200} width={200} /> </td>
                        <td>A Strawberry Jamz</td>
                        <td>1</td>
                        <td>$19.99</td>
                        <td>
                            <button className="icon-button">
                                <FaTrash className="icon"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><Image src="/images/Strawjamz_1024x1024@2x.png" height={200} width={200} /> </td>
                        <td>A Strawberry Jamz</td>
                        <td>1</td>
                        <td>$19.99</td>
                        <td>
                            <button className="icon-button">
                                <FaTrash className="icon"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </CartTableStyles>
    )
}