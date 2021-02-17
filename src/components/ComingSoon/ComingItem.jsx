import React from 'react'
import {
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import Icons from '../Icons'
import useStyles from './styles/comingItemStyles'


const ComingItem = ({img, text}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={img}
        alt="game"
      />
      <Typography
        className={classes.title}
        variant='h6'
      >
        {text}
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Your email"
          InputProps={{className: classes.input}}
        />
        <Button>
          Subscribe
        </Button>
      </form>
      <Icons/>
    </div>
  )
}

export default ComingItem
