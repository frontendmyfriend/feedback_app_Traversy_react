import Card from "./shared/Card"
// import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem ({item}) {

  const {deleteFeedback}= useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button
        onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>

    </Card>
  )
}

// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired
// }

export default FeedbackItem

// function FeedbackItem ({item}) {
  
//   // const [rating, setRating] = useState(7)
//   // const [text, setText] = useState('This is an example of a Feedback Item yo')
//   // const handleClick = () => {
//   //   setRating((prev) => {
//   //     return prev +1
//   //   })
//   // }

//   return (
//     <div className='card'>
//          <div className="num-display">{item.rating}</div>
//       <div className="text-display">{item.text}</div>
//       {/* <div className="num-display">{rating}</div>
//       <div className="text-display">{text}</div> */}
//       {/* <button onClick={handleClick}>Click Me</button> */}
//       </div>
//   )
// }

// export default FeedbackItem

