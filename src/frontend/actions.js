let actions = {
  changeButton: function(text) {
    return {
      type: 'CHANGE_BUTTONX',
      text: text
    }
  }
}
export default actions
// store.dispatch(changeButton('100'))
