import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  item: {
    marginBottom: '20px'
  },
  title: {
    fontSize: '21px',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px'
    }
  }
}))

const ContactItem = ({title, subtitle}) => {
  const classes = useStyles()

  return (
    <div className={classes.item}>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography>
        {subtitle}
      </Typography>
    </div>
  )
}

const ContactPageInfo = () => {

  return (
    <>
      <ContactItem
        title='Location'
        subtitle='Baker Street 223 B, London 423668'
      />
      <ContactItem
        title='Phone'
        subtitle='+1 623-812-4957'
      />
      <ContactItem
        title='E-mail'
        subtitle='support@promo-theme.com'
      />
    </>
  )
}

export default ContactPageInfo
