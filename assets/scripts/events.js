'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store')

const changeBackground = function () {
  const images = [
    'images/001.jpg',
    'images/002.jpg',
    'images/003.jpg',
    'images/004.jpg'
  ]

  const randomNumber = Math.floor(Math.random() * images.length)
  const bgImg = 'url("../public/' + images[randomNumber] + '")'

  $('body').css({ 'background': bgImg, 'backgroundSize': 'cover' })
}

const showDate = function () {
  const n = new Date()
  const y = n.getFullYear()
  const m = n.getMonth() + 1
  const d = n.getDate()
  $('#btnDate').html(m + '/' + d + '/' + y)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSubmit = function () {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(store)
  api.submit(data.progress.weight, data.progress.calories, data.progress.protein, data.progress.carbohydrate, data.progress.fat, data.progress.sugar, data.progress.fiber, data.progress.cardio)
    .then(ui.submitSuccess)
    .catch(ui.submitSuccess)
}

// const onShowProgresses = function (event) {
//   event.preventDefault()
//   api.showProgresses()
//     .then(ui.showProgressesSuccess)
//     .catch(ui.showProgressesFailure)
// }

const onShowProgress = function (event) {
  event.preventDefault()
  api.showProgress()
    .then(ui.showProgressSuccess)
    .catch(ui.showProgressFailure)
}

const onDeleteProgress = function (event) {
  const progressId = $(event.target).data('id')
  event.preventDefault()
  api.deleteProgress(progressId)
    .then(ui.deleteProgressSuccess)
    .catch(ui.deleteProgressFailure)
}

const onUpdateProgress = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const progressId = $(event.target).data('id')
  console.log(data)
  api.updateProgress(data.weight, progressId, data.progress.calories, data.progress.protein, data.progress.carbohydrate, data.progress.fat, data.progress.sugar, data.progress.fiber, data.progress.cardio)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onSubmit,
  // onShowProgresses,
  onShowProgress,
  onDeleteProgress,
  onUpdateProgress,
  changeBackground,
  showDate
}
