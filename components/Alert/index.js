const Alert = ({show, message = 'error'}) => {
  if (show)
    return (<span className="error">{message}</span>)
  else 
    return null;
}

export default Alert;
