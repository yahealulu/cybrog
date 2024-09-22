import { SecondaryButton } from '../Buttons/Button'
import './GamingLibraryCard.css'
const GamingLibraryCard = (props) => {
  return (
    <div className='Gaming-Library-Card'>
      <ul>
          <li><img src={props.image}alt='no'></img></li>
            <li><h4>{props.title}</h4><span>{props.Category}</span></li>
            <li><h4>Date Added</h4><span>{props.date_added}</span></li>
            <li><h4> Hours played</h4><span>{props.hours_played}</span></li>
            <li><h4>currently</h4><span>{props.dawnloaded}</span></li>
            <SecondaryButton>Dawnload</SecondaryButton> 
      </ul>
    </div>
  )
}

export default GamingLibraryCard