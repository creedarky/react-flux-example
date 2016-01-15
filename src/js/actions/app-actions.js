import AppConstant from '../constants/app-constant'
import {dispatch, register} from '../dispatchers/app-dispatcher'

export default {
  addItem(item) {
    dispatch({
      actionType: AppConstant.ADD_ITEM, item
    })
  },
  removeItem(item) {
    dispatch({
      actionType: AppConstant.REMOVE_ITEM, item
    })
  },
  increaseItem(item) {
    dispatch({
      actionType: AppConstant.INCREASE_ITEM, item
    })
  },
  decreaseItem(item) {
    dispatch({
      actionType: AppConstant.DECREASE_ITEM, item
    })
  }

}
