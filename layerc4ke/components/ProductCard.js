import Image from "next/image";
import Link from 'next/link';
import formatMoney from "../lib/formatMoney";

export default function ProductCard({ inventory }) {
  return (
    <div className="product-container">
      {inventory.map((item) => (
        <Link href={`/product/${item._id}`} key={item.name}>
          <div className="card-container" key={item.name}>
            <a>{item.name}</a>  
            <Image className="image" src={`/images/${item.image}`} width={400} height={400} />
            <p>{formatMoney(item.price)}</p>
          </div>
        </Link>
        
      ))}
    </div>
  );
}
