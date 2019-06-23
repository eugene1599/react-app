const getCustomerFullNameById = (customers, id) => {
  const customer = customers.find(item => item.id === id)
  return `${customer.first_name} ${customer.last_name}`
}

export default {
  getCustomerFullNameById
}
