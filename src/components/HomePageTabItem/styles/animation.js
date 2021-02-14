const fadeInUp = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -600
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .2,
      delayChildren: 0.4,
    }
  }
}

export {
  fadeInUp,
  fadeInLeft
}
