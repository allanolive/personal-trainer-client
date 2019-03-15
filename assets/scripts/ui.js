'use strict'
const showProgressesTemplate = require('./templates/progresses.handlebars')
const store = (require('./store'))

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('You Have Successfully Signed Up, Please Sign In')
  $('form').trigger('reset')
  $('#signUpModal').modal('hide')
}

const signUpFailure = function () {
  $('#messages').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  console.log(store.user.email)
  $('form').trigger('reset')
  $('#messages').text('Successfully Signed In')
  $('#signInModal').modal('hide')
  $('#change-password').show()
  $('#navMessages').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#contentContainer').show()
  $('#navMessages').text('Welcome ' + store.user.email.split('@').slice(0, -1))
}

const signInFailure = function () {
  $('#modalMessages').text('TRY AGAIN')
  $('form').trigger('reset')
  $('#messages').show()
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('form').trigger('reset')
  $('#messages').html('you changed your password')
}

const changePasswordFailure = function () {
  $('#modalMessages').text('TRY AGAIN')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#messages').html('You Are Now Signed Out')
  $('#contentContainer').hide()
  $('#content-progress').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#navMessages').hide()
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
}
const submitSuccess = function (responseData) {
  $('#messages').text('you have submitted your progress')
  $('form').trigger('reset')
}

const submitFailure = function () {
  $('#messages').text('Please try submitting again')
}

// const showProgressesSuccess = function (responseData) {
//   store.progresses = responseData.progresses
//   const showProgressesHtml = showProgressesTemplate({ progresses: responseData.progresses })
//   $('#content-progress').append(showProgressesHtml)
// }
// const showProgressesFailure = function () {
//   $('#messages').text('Please try again')
// }

// if (store.progresses.length !== 2) {
//   $('#navMessages').text('only one submit allowed per day')
// } else {
//   $('#content-progress').append(showProgressesHtml)
// }
const showProgressSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  $('#content-progress').show()
  console.log(store.progresses.length)
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
  if (store.progresses.length < 1) {
    $('#messages').text('no progress to show')
  } else {
    $('#contentContainer').hide()
    $('#content-progress').append(showProgressesHtml)
  }
}

const showProgressFailure = function () {
  $('#messages').text('Please try again')
}

const deleteProgressSuccess = function () {
  console.log('button works')
  $('#content-progress').hide()
  $('#messages').html('deleted progress successfully')
  $('#contentContainer').show()
}

const deleteProgressFailure = function () {
  $('#messages').html('delete not successful')
}

const updateProgressSuccess = function () {
  console.log('button works')
  $('#messages').html('deleted progress successfully')
}

const updateProgressFailure = function () {
  $('#messages').html('delete not successful')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  submitSuccess,
  submitFailure,
  // showProgressesSuccess,
  // showProgressesFailure,
  showProgressSuccess,
  showProgressFailure,
  deleteProgressSuccess,
  deleteProgressFailure,
  updateProgressFailure,
  updateProgressSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
