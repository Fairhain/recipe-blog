import './card.scss'

const cards = [
    {
        text: 'hihih',
        name: 'hi'
    },
    {
        text: 'byby',
        name: 'by'
    }
]

export default function Card() {
    return (
        <div className='card'>
            <ul>
            {
                cards.map((link, index) => (
                    <li key={index}>
                        <div className='cardItem'>
                            <p>
                                {link.text}
                            </p>
                            <a href={`h/posts/${link.name}`}>
                              Read More
                            </a>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}