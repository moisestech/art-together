import * as React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

export default function Chat ({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar
          className='chat-image'
          alt={name}
          src={profilePic}
        />
        <div className='chat-details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
      </div>
    </Link>
  )
}

Chat.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

