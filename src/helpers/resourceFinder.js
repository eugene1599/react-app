
export default (state, resource) => {
  if(resource && resource.id){
    return state[resource.name]['items'].filter(res => { return res.id === resource.id})[0]
  }
}
