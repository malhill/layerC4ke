import Image from "next/image";
import Link from 'next/link';
import { Card } from "../styles/ProductCard.styles";

export default function ProductCard({ inventory }) {
  return (
    <Card>
      {inventory.map((item) => (
        <div className="card-container" key={item.name}>
          <Link href={`/product/${item._id}`}>
            <a>{item.name}</a>
          </Link>
          
          <Image src={`/images/${item.image}`} width={400} height={400} />
          <p>${item.price}</p>
        </div>
      ))}
    </Card>
  );
}
