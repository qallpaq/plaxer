const slideInLeft = delay => {
  return {
    hidden: {
      x: -700
    },
    visible: {
      x: 0,
      originX: 0,
      transition: {
        delay: delay, duration: 1
      }
    }
  }
}

export {
  slideInLeft
}
