import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  TextField,
  Button,
  makeStyles
} from '@material-ui/core'
import { useFormik } from 'formik'
import { setAlert } from '../../redux/actions'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    marginBottom: '10px',
    color: '#fff'
  }
})


const EmailForm = ({userMail, alertMessage, BtnVariant = Button}) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      [userMail]: ''
    },
    onSubmit: (values, onSubmitProps) => {
      dispatch(setAlert(alertMessage))
      onSubmitProps.resetForm()
    }
  })

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <TextField
        InputProps={{className: classes.input}}
        type='email'
        label="Your email"
        required
        name={userMail}
        value={formik.values[userMail]}
        onChange={formik.handleChange}
      />
      <BtnVariant type='submit'>
        Subscribe
      </BtnVariant>
    </form>
  )
}

EmailForm.propTypes = {
  userMail: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
  BtnVariant: PropTypes.func
}

export default EmailForm
