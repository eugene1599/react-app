
import * as dependencies from './dependencies'
import CrudActions from '../crud_actions'

const crud = new CrudActions(dependencies)
const { fetchAllItems, createItem, updateItem } = crud

export { fetchAllItems, createItem, updateItem }
