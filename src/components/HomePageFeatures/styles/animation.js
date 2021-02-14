const container = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const fadeIn = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}

export {
  container,
  fadeIn
}
