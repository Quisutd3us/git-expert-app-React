export const genId = () => {
  let s4 = () => {
    const random = Math.floor((1 + Math.random()) * 0x1000)
        .toString(16)
        .substring(1)
    const date = Date.now().toString(36)
    return random + date
  }
  return s4() + s4() + '-' + s4() + '-' + s4();
}