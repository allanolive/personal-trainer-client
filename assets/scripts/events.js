'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store')

const updateForm = function () {
  // $('#content-progress').hide()
  // $('#main-body').hide()
  // $('#main-body-update').show()
  $('#content-progress').html('')
  $('#content-progress').hide()
  $('#main-body-update').show() // 1
  $('#contentContainer').hide()
  // $('#submit').hide()
  $('#update').show()
  showDate()
}

const onModalFade = function () {
  $(this).find('.modal-messages').text('')
}

const changeBackground = function () {
  const images = [
    'images/001.jpg',
    'images/002.jpg',
    'images/003.jpg',
    'images/004.jpg'
  ]

  const randomNumber = Math.floor(Math.random() * images.length)
  const bgImg = 'url("public/' + images[randomNumber] + '")'

  $('body').css({ 'background': bgImg, 'backgroundSize': 'cover' })
}

const showDate = function () {
  const n = new Date()
  const y = n.getFullYear()
  let m = ''
  const num = 1
  const month = parseInt(n.getMonth())
  const currentMonth = (month + num).toString()
  console.log(0 + currentMonth)
  if ((currentMonth) < 10) {
    m = '0' + currentMonth
  } else {
    m = currentMonth
  }
  let d = ''
  if (n.getDate() < 10) {
    d = '0' + n.getDate() + 1
  } else {
    d = n.getDate()
  }
  $('.btnDate').html(y + '-' + m + '-' + d)
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

const onShowProgresses = function () {
  event.preventDefault()
  api.showProgresses()
    .then(ui.showProgressesSuccess)
    .catch(ui.showProgressesFailure)
}

const onShowProgress = function (event) {
  event.preventDefault()
  api.showProgress()
    .then(ui.showProgressSuccess)
    .catch(ui.showProgressFailure)
}

const onDeleteProgress = function (event) {
  const progressId = $(event.target).data('id')
  console.log(progressId)
  event.preventDefault()
  api.deleteProgress(progressId)
    .then(ui.deleteProgressSuccess)
    .catch(ui.deleteProgressFailure)
}

const onUpdateProgress = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const progressId = store.progresses[0].id
  api.updateProgress(progressId, data.progress.weight, data.progress.calories, data.progress.protein, data.progress.carbohydrate, data.progress.fat, data.progress.sugar, data.progress.fiber, data.progress.cardio)
    .then(ui.updateProgressSuccess)
    .catch(ui.updateProgressFailure)
}

const onGetPreviousProgress = function () {
  event.preventDefault()
  const prog = store.progresses
  const progressId = prog[0].id
  api.getPreviousProgress(progressId)
    .then(ui.getPreviousProgressSuccess)
    .catch(ui.getPreviousProgressSuccess)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onSubmit,
  onShowProgresses,
  onShowProgress,
  onDeleteProgress,
  onUpdateProgress,
  changeBackground,
  showDate,
  onModalFade,
  updateForm,
  onGetPreviousProgress
}
