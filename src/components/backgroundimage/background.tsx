import './background.scss';
import backgroundImage from './background.jpg';

export default function Background() {
    return (
        <div>
            <img src={backgroundImage.src}/>
            <div className='bottombackground'>Read The Blog</div>
            
        </div>
    )
}