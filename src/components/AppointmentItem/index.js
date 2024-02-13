// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointments, toggleStarred} = props
  const {appointment, date, isStarred, id} = appointments

  const onChageStarred = () => {
    toggleStarred(id)
  }

  const appointmentSheduledDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="appointment-details">
        <p className="appointment-name">{appointment}</p>
        <p className="appointment-date">{appointmentSheduledDate}</p>
      </div>
      <div>
        <button
          className="star-button"
          type="button"
          data-testid="star"
          onClick={onChageStarred}
        >
          <img className="star-img" src={starImgUrl} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
