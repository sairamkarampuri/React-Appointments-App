// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointmentList = []

class Appointments extends Component {
  state = {
    appointmentList: initialAppointmentList,
    appointment: '',
    date: '',
    isStarredActive: false,
  }

  // Starred Appointments
  starredAppointment = () => {
    const {isStarredActive} = this.state
    if (isStarredActive === false) {
      this.setState(prevState => ({
        isStarredActive: !prevState.isStarredActive,
      }))
    } else {
      this.setState(prevState => ({
        isStarredActive: !prevState.isStarredActive,
      }))
    }
  }

  // toggleStarred
  toggleStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  // Adding appointment

  addAnAppointment = event => {
    event.preventDefault()
    const {appointment, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      appointment,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      appointment: '',
      date: '',
    }))
  }

  handleAppointment = event => {
    this.setState({appointment: event.target.value})
  }

  handleAppointmentDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentList, appointment, date, isStarredActive} = this.state
    const activeStatus = isStarredActive ? 'active' : ''
    const starredList = appointmentList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )

    const showingListOfAppointments = isStarredActive
      ? starredList
      : appointmentList

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="top-section">
            <form className="form-container" onSubmit={this.addAnAppointment}>
              <div className="input-section">
                <label className="label" htmlFor="appointment">
                  TITLE
                </label>
                <input
                  className="input-box"
                  type="text"
                  id="appointment"
                  value={appointment}
                  onChange={this.handleAppointment}
                />
              </div>
              <div className="input-section">
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <input
                  className="input-box"
                  type="date"
                  id="date"
                  value={date}
                  onChange={this.handleAppointmentDate}
                />
              </div>
              <div>
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="img-section">
              <img
                className="appointment-img"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <div className="bottom-section">
            <div className="appointment-Starred-section">
              <h1 className="bottom-appointment-text">Appointments</h1>
              <button
                className={`starred-botton ${activeStatus}`}
                type="button"
                onClick={this.starredAppointment}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-list-container">
              {showingListOfAppointments.map(eachAppointment => (
                <AppointmentItem
                  appointments={eachAppointment}
                  toggleStarred={this.toggleStarred}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
