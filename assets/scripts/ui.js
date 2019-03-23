'use strict'
const showProgressesTemplate = require('./templates/progresses.handlebars')
const store = (require('./store'))
const visibility = require('./visibility')
const functions = require('./helper-functions')

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#navMessages').html('Signed Up, Please Sign In')
  setTimeout(() => { $('#navMessages').html('') }, 3500)
  visibility.signUpSuccess()
}

const signUpFailure = function () {
  $('#signUpModalMessages').text('PLEASE TRY AGAIN')
  setTimeout(() => { $('#signUpModalMessages').html('') }, 3000)
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  store.inputUpdateID = []
  const user = store.user.email.split('@').slice(0, -1).toString().toUpperCase()
  $('#messages').text('welcome: ' + user)
  visibility.signInSuccess()
}

const signInFailure = () => {
  $('#signInModalMessages').html('PLEASE TRY AGAIN')
  setTimeout(() => { $('#signInModalMessages').html('') }, 2000)
  $('form').trigger('reset')
  // $('#messages').show()
}

const changePasswordSuccess = function () {
  $('#navMessages').html('Change Password Success')
  setTimeout(() => { $('#navMessages').html('') }, 3000)
  visibility.changePasswordSuccess()
}

const changePasswordFailure = function () {
  $('#changePasswordModalMessages').text('ERROR')
  setTimeout(() => { $('#changePasswordModalMessages').html('') }, 3000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.inputUpdateID = []
  $('#navMessages').html('You Are Now Signed Out')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
  visibility.signOutSuccess()
}

const signOutFailure = function () {
  $('#navMessages').text('Error on sign out')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
}

const submitSuccess = function (responseData) {
  // $('.messages').html('')
  $('form').trigger('reset')
  $('#navMessages').text('you have submitted your progress')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
}

const submitFailure = function () {
  $('#navMessages').text('Please try submitting again')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
}

const showProgressesSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  visibility.showProgressSuccess()
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
  $('#content-progress').append(showProgressesHtml)
}

const showProgressesFailure = function () {
  $('#navMessages').text('Please try again')
}

const showProgressSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  $('#content-progress').show()
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
  if (store.progresses.length < 1) {
    $('#navMessages').text('No Progresses To Show')
    setTimeout(() => { $('#navMessages').html('') }, 2000)
  } else {
    $('#main-body-update').hide()
    $('#contentContainer').hide()
    $('#content-progress').append(showProgressesHtml)
    functions.showDate()
  }
}

const showProgressFailure = function () {
  $('#navMessages').text('Please try again')
}

const deleteProgressSuccess = function () {
  $('#content-progress').html('')
  $('#navMessages').html('')
  $('#navMessages').html('deleted progress successfully')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
  $('#contentContainer').show()
}

const deleteProgressFailure = function () {
  $('#navMessages').html('delete not successful')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
}

const updateProgressSuccess = function (responseData) {
  store.progress = responseData.progress
  $('#navMessages').html('updated progress successfully')
  setTimeout(() => { $('#navMessages').html('') }, 2000)
  $('form').trigger('reset')
  const updateProgressesHtml = showProgressesTemplate({ progress: responseData.progress })
  $('#content-progress').append(updateProgressesHtml)
  $('#main-body-update').hide()
}

const updateProgressFailure = function () {
  $('#navMessages').html('delete not successful')
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
  showProgressesSuccess,
  showProgressesFailure,
  showProgressSuccess,
  showProgressFailure,
  deleteProgressSuccess,
  deleteProgressFailure,
  updateProgressFailure,
  updateProgressSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
