import Image from 'next/image';

export default function ProductCard({ inventory }) {
    return (
    //   <ul className="list-group">
    //     {inventory.map(item => (
    //       <li className="list-group-item" key={item.id}>
    //         {item.name}
    //       </li>
    //     ))}
    //   </ul>

    <div>
        {inventory.map(item => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <Image src={`/images/${item.image}`} width={300} height={200} />
                <p>{item.price}</p>
            </div>
        ))}
    </div>
    );
  }