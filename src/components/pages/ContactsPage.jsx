import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  Grid
} from '@material-ui/core'
import Map from '../Map'
import ContactPageInfo from '../ContactPageInfo'
import Page from '../Page'
import ContactForm from '../ContactForm'
import useStyles from './styles/contactsPageStyles'
import { setAlert } from '../../redux/actions'


const ContactsPage = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const onSubmit = (values, onSubmitProps) => {
    dispatch(setAlert('Message sent'))
    onSubmitProps.resetForm()
  }

  return (
    <Page page='Contacts' styled={false}>
      <div className={classes.root}>
        <Map/>
        <Container className={classes.container}>
          <Grid container spacing={3} justify='center'>
            <Grid item className={classes.title} component='h1'>
              Don’t shy to Contact us.
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ContactForm
                field1='contactPageName'
                field2='contactPageEmail'
                field3='contactPageText'
                onSubmit={onSubmit}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <ContactPageInfo/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Page>
  )
}

export default ContactsPage
