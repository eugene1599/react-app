import * as dependencies from './dependencies'
import CrudActions from '../crud_actions'

const crud = new CrudActions(dependencies);
const { fetchAllItems, createItem, updateItem, deleteItem } = crud;

export { fetchAllItems, createItem, updateItem, deleteItem }
