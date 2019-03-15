'use strict'
const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#contentContainer').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#content-progress.progress-update').hide()
  events.changeBackground()
  events.showDate()
  $('body').on('submit', '#btn-sign-up', events.onSignUp)
  $('body').on('submit', '#btn-sign-in', events.onSignIn)
  $('#btn-change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#input').on('submit', events.onSubmit)
  // $('#show-progresses').on('click', events.onShowProgresses)
  $('#show-progress').on('click', events.onShowProgress)
  $('#content-progress').on('click', '.delete-button', events.onDeleteProgress)
  $('#content-progress').on('submit', '.update-button', events.onUpdateProgress)
})
