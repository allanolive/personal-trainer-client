'use strict'

const store = require('./store')

const updateForm = () => {
  $('#contentContainer').hide()
  $('#content-progress').hide()
  $('#update').show()
  $('#main-body-update').show()
  $('#contentContainerUpdate').show()
  $('#content-progress').html('')
  $('#navMessages').html('')
  const user = store.user.email.split('@').slice(0, -1).toString().toUpperCase()
  $('#messages-update').text('welcome: ' + user)
}

const newProgressForm = () => {
  $('#content-progress').hide()
  $('#main-body').show()
  $('#contentContainer').show()
  $('#navMessages').html('')
  $('#content-progress').html('')
}

const signUpSuccess = () => {
  $('#signUpModal').modal('hide')
  $('form').trigger('reset')
  $('#signUpModalMessages').text('')
}

const signInSuccess = () => {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#update').hide()
  $('#signInModal').modal('hide')
  $('#change-password').show()
  $('#navMessages').show()
  $('#contentContainer').show()
  $('#sign-out').show()
  $('form').trigger('reset')
  $('#navMessages').html('')
  $('#signInModalMessages').text('')
}

const changePasswordSuccess = () => {
  $('#changePasswordModal').modal('hide')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#contentContainerUpdate').hide()
  $('#contentContainer').hide()
  $('#content-progress').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

const showProgressSuccess = () => {
  $('#contentContainerUpdate').hide()
  $('#contentContainer').hide()
  $('#content-progress').show()
}

module.exports = {
  updateForm,
  newProgressForm,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  showProgressSuccess
}
