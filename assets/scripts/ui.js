'use strict'
const store = (require('./store'))

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('You Have Successfully Signed Up, Please Sign In')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#messages').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('Successfully Signed In')
}

const signInFailure = function () {
  $('#messages').text('Please Enter Correct Email and Password')
  $('form').trigger('reset')
  $('#messages').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
