import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'


const teamCreator = (name, number, img, id, win) => ({name, number, img, id, win: win})

const createRandomDate = () => {
  const createRandomDay = () => Math.floor(Math.random() * 28) + 1

  let hours = Math.floor(Math.random() * 11)
  let minutes = Math.floor(Math.random() * 59)

  if (String(minutes).length === 1) {
    minutes = '0' + minutes
  }

  const time = hours + ':' + minutes

  return `December ${createRandomDay()}, 2020 ${time} pm`
}

const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({threshold: 0.1})

  if (view) {
    controls.start('visible')
  } else {
    controls.start('hidden')
  }

  return [element, controls]
}

export {
  teamCreator,
  createRandomDate,
  useScroll
}
