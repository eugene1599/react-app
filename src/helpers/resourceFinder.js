
export default (state, resource) => {
  if(resource && resource.id){
    return state[resource.name][resource.name].filter(res => { return res.id === resource.id})[0]
  }
}
