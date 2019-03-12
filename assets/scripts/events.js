'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store')

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
  console.log(data)
  api.submit(data.weight, data.calories, data.protein, data.carbohydrate, data.fat, data.sugar, data.fiber, data.cardio)
    .then(ui.submitSuccess)
    .catch(ui.submitSuccess)
}

const onShowProgresses = function (event) {
  event.preventDefault()
  api.showProgresses()
    .then(ui.showProgressesSuccess)
    .catch(ui.showProgressesFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onSubmit,
  onShowProgresses
}
