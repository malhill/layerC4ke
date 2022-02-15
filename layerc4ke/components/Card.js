export default function Card({ item: { id, title, body, image } }) {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={image} alt='' />
            </div>
        </div>
    )
}