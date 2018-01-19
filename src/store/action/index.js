export default (stateToUpdate, type) => {
  return {
    type: type,
    payload: stateToUpdate
  }
}
