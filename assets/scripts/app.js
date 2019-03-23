'use strict'
const events = require('./events.js')
const functions = require('./helper-functions')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#main-body-update').hide()
  $('#contentContainer').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#content-progress.progress-update').hide()
  functions.changeBackground()
  functions.showDate()
  $('.fade').on('hidden.bs.modal', functions.onModalFade)
  $('body').on('submit', '#btn-sign-up', events.onSignUp)
  $('body').on('submit', '#btn-sign-in', events.onSignIn)
  $('#btn-change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#input').on('submit', events.onSubmit)
  $('.show-progress').on('click', events.onShowProgress)
  $('#content-progress').on('click', '.delete-button', events.onDeleteProgress)
  $('#input-update').on('submit', events.onUpdateProgress)
  $('#content-progress').on('click', '.update-button', events.updateForm)
  $('#content-progress').on('click', '.new-progress-button', events.newProgressForm)
  $('#cancel-update').on('click', events.onShowProgress)
})
