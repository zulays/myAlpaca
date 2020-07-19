import React, { Component } from 'react'
import './UserDelete.css'
import { getUser, deleteUser } from '../../services/users'
import { Link } from 'react-router-dom'

class UserDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const user = await getUser(id)
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    return (
      <div className="userDelete-section">
        <p className="sorry-title">We are sorry to see you go...</p>
        <div className="options-box">
          <p className="tell-us">Tell us why so we can get better</p>
          <div className="checkbox-div">
            <div className="no-longer">
              <input className="checkbox" type="checkbox" id="no-longer" name="no-longer"></input>
              <label htmlFor="no-longer">I'm no longer studying abroad</label>
            </div>
            <div className="not-useful">
              <input className="checkbox" type="checkbox" id="not-useful" name="not-useful"></input>
              <label htmlFor="not-useful">I didn't find the website useful</label>
            </div>
            <div className="wrong-info">
              <input className="checkbox" type="checkbox" id="wrong-info" name="wrong-info"></input>
              <label htmlFor="wrong-info">Website provided wrong information</label>
            </div>
          </div>
        </div>
        <div className="buttons-div">
          <button className="delete-button" onClick={() => deleteUser(user._id)}>Delete Profile</button>
          {/* <button className="cancel-button">Cancel</button> */}
          <button className="cancel-button"><Link className="cancel-link" to={`/manageprofile`}>Cancel</Link></button>
        </div>
      </div>
    )
  }
}

export default UserDelete
