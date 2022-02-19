import Image from 'next/image';
import { Card } from '../styles/ProductCard.styles';

export default function ProductCard({ inventory }) {
    return (
        <Card>
            {inventory.map(item => (
                <div className="card-container" key={item.id}>
                    <h2>{item.name}</h2>
                    <Image src={`/images/${item.image}`} width={300} height={200} />
                    <p>${item.price}</p>
                </div>
            ))}
        </Card>
    );
  }