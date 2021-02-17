const slideIn = startX => {
  return {
    hidden: {x: startX},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        type: 'spring',
        mass: .4,
        damping: 10
      }
    }
  }
}

export { slideIn }
