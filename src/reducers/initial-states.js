const initialState = {
  userModel: _userModel,
  toasts: _toasts,
  demos: _demos,
  demo: _demo,
  nav: _nav
}

function _nav() {
  return {
    sidebarToggleState: false,
    userToggleState: false
  }
}

function _userModel() {
  return {
    isLoggedIn: false,
    token: undefined,
    email: '',
    pass: '',
    display_name: ''
  }
}

function _toasts() {
  return [
  ]
}
function _demos() {
  return [];
}
function _demo() {
  return {
    id: '',
    title: '',
    topic: '',
    subtopic: '',
    created: ''
  }
}

export default initialState;
