const getCustomerNamesForRaces = (state) => {
  let { races, customers } = state
  let mappedRaces = races.items.map((race) => {

    let customer = customers.items.find(customer => customer.id === race.id)
    let customer_fullname = ''
    if(customer) customer_fullname = `${customer.first_name} ${customer.last_name}`
    return {...race, customer_fullname }
  })

  return mappedRaces
}

export default {
  getCustomerNamesForRaces
}
