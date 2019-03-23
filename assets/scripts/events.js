'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const visibility = require('./visibility')
const functions = require('./helper-functions')

const updateForm = function () {
  visibility.updateForm()
  store.inputUpdateID.push($(event.target).data('id'))
  functions.showDate()
}

const newProgressForm = function () {
  visibility.newProgressForm()
  functions.showDate()
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
  api.submit(data.progress.weight, data.progress.calories, data.progress.protein, data.progress.carbohydrate, data.progress.fat, data.progress.sugar, data.progress.fiber, data.progress.cardio)
    .then(ui.submitSuccess)
    .then(onShowProgress)
    .catch(ui.submitSuccess)
}

const onShowProgresses = function () {
  event.preventDefault()
  api.showProgresses()
    .then(ui.showProgressesSuccess)
    .catch(ui.showProgressesFailure)
}

const onShowProgress = function (event) {
  if (event) { event.preventDefault() }
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

  const progressId = store.inputUpdateID.pop()

  api.updateProgress(progressId, data.progress.weight, data.progress.calories, data.progress.protein, data.progress.carbohydrate, data.progress.fat, data.progress.sugar, data.progress.fiber, data.progress.cardio)
    .then(ui.updateProgressSuccess)
    .then(onShowProgress)
    .catch(ui.updateProgressFailure)
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
  updateForm,
  newProgressForm
}
