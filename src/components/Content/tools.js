const scrollBack = scroll => {
  const recursion = setTimeout(scrollBack, 15, scroll - 200)

  if (scroll <= 0.1) {
    clearTimeout(recursion)
    return window.scrollTo(0, 0)
  }

  window.scrollTo(0, scroll)
  return recursion
}

export { scrollBack }
