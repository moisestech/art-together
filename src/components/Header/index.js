import PropTypes from "prop-types";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";

// useHistory API?

export default function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon fontSize="large" className="header-icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header-icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        {/*<img
          className='header-logo'
          src=''
          alt='logo'/> */}
        art+together
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

Header.propTypes = {
  backButton: PropTypes.any,
};
