'use strict'
const authEvents = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#content-progress.progress-update').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#input').on('submit', authEvents.onSubmit)
  $('#show-progresses').on('click', authEvents.onShowProgresses)
  $('#show-progress').on('click', authEvents.onShowProgress)
  $('#content-progress').on('click', '.delete-button', authEvents.onDeleteProgress)
  $('#content-progress').on('submit', '#update-progress', authEvents.onUpdateProgress)
})
