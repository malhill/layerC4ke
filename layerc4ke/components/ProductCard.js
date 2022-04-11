import Image from "next/image";
import Link from 'next/link';
import { Card } from "../styles/ProductCard.styles";
import formatMoney from "../lib/formatMoney";

export default function ProductCard({ inventory }) {
  return (
    <Card>
      
      {inventory.map((item) => (
        <Link href={`/product/${item._id}`} key={item.name}>
          <div className="card-container" key={item.name}>
            <a>{item.name}</a>  
            <Image src={`/images/${item.image}`} width={400} height={400} />
            <p>{formatMoney(item.price)}</p>
          </div>
        </Link>
        
      ))}
    </Card>
  );
}
