import './card.scss'

const cards = [
    {
        text: 'Post 1',
        name: 'post1'
    },
    {
        text: 'byby',
        name: 'by'
    },
    {
        text: 'heya',
        name: 'hey'
    }
]

export default function Card() {
    return (
        <div>
            
            <div className='card'>
                <ul>
                {
                    cards.map((link, index) => (
                        <li key={index}>
                            <div className='cardItem'>
                                <p>
                                    {link.text}
                                </p>
                                <a href={`./posts/${link.name}`}>
                                Read More
                                </a>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}