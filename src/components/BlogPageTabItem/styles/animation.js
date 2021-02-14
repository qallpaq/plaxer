const container = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const fadeIn = {
  hidden: {x: '-100vw'},
  visible: {
    x: 0,
    transition: {
      duration: .3,
      type: 'spring',
      mass: .4,
      damping: 10
    }
  }
}

export {
  fadeIn,
  container
}
