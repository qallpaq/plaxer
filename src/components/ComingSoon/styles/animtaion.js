const slideInRight = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      duration: .3,
      type: 'spring',
      mass: .1,
      damping: 8,
      delay: .1
    }
  }
}

export {
  slideInRight
}
