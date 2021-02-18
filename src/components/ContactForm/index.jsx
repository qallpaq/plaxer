import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Button
} from '@material-ui/core'
import useStyles from './styles/styles'
import { Formik, Form, Field } from 'formik'


const ContactForm = ({field1, field2, field3, onSubmit, styles}) => {
  const classes = useStyles()

  const initialValues = {
    [field1]: '',
    [field2]: '',
    [field3]: ''
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form style={styles}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Field
              className={classes.input}
              required
              placeholder='Your name'
              type='text'
              name={field1}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Field
              className={classes.input}
              required
              placeholder='Your E-mail'
              type='email'
              name={field2}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              className={classes.textarea}
              component='textarea'
              required
              placeholder="Message"
              name={field3}
            />
          </Grid>
        </Grid>
        <Button type='submit'>Send It Now</Button>
      </Form>
    </Formik>
  )
}

ContactForm.propTypes = {
  field1: PropTypes.string.isRequired,
  field2: PropTypes.string.isRequired,
  field3: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  styles: PropTypes.object
}

export default ContactForm
