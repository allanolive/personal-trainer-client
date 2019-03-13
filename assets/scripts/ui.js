'use strict'
const showProgressesTemplate = require('./templates/progresses.handlebars')
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

const signOutSuccess = function () {
  $('#messages').html('You Are Now Signed Out')
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
  $('form').trigger('reset')
}
const submitSuccess = function (responseData) {
  $('#messages').text('you have submitted your progress')
}

const submitFailure = function () {
  $('#messages').text('Please try submitting again')
}

const showProgressesSuccess = function (responseData) {
  store.progresses = responseData.progresses
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.progresses })
  $('#content-progress').append(showProgressesHtml)
}

const showProgressesFailure = function () {
  $('#messages').text('Please try again')
}

const showProgressSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
  $('#content-progress').append(showProgressesHtml)
}

const showProgressFailure = function () {
  $('#messages').text('Please try again')
}

const deleteProgressSuccess = function () {
  console.log('button works')
  $('#messages').html('deleted progress successfully')
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
  showProgressesSuccess,
  showProgressesFailure,
  showProgressSuccess,
  showProgressFailure,
  deleteProgressSuccess,
  deleteProgressFailure,
  updateProgressFailure,
  updateProgressSuccess
}
