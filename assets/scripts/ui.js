'use strict'
const showProgressesTemplate = require('./templates/progresses.handlebars')
const store = (require('./store'))
const api = require('./api')

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

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('You Have Successfully Signed Up, Please Sign In')
  $('form').trigger('reset')
  $('#signUpModalMessages').text('')
  $('#signUpModal').modal('hide')
}

const signUpFailure = function () {
  $('#signUpModalMessages').text('PLEASE TRY AGAIN')
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  store.user.token = responseData.user.token
  console.log(store.user)
  $('#signInModalMessages').text('')
  $('form').trigger('reset')
  $('#signInModal').modal('hide')
  $('#change-password').show()
  $('#navMessages').show()
  // $('#contentContainer').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#update').hide()
  $('#messages').text('Welcome ' + store.user.email.split('@').slice(0, -1))
  api.showProgresses()
    .then(showProgressesSuccess)
    .catch(showProgressesFailure)
}

const signInFailure = function () {
  $('#signInModalMessages').text('PLEASE TRY AGAIN')
  $('form').trigger('reset')
  $('#messages').show()
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('form').trigger('reset')
  $('#messages').html('you changed your password')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#navMessages').text('please try again')
}

const signOutSuccess = function () {
  $('#messages').html('You Are Now Signed Out')
  $('#contentContainer').hide()
  $('#content-progress').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#navMessages').hide()
  $('#contentContainerUpdate').hide()
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
}
const submitSuccess = function (responseData) {
  $('#messages').text('you have submitted your progress')
  $('form').trigger('reset')
  if (store.progresses.length > 1) {
    $('#messages').text('Already Submitted Today')
  } else {
    api.showProgress()
      .then(showProgressSuccess)
      .catch(showProgressFailure)
  }
}

const submitFailure = function () {
  $('#messages').text('Please try submitting again')
}

const showProgressesSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  // showDate()
  // $('#content-progress').show()
  // const date = $('.btnDate').html()
  const progresses = store.progresses
  for (let i = 0; i < progresses.length; i++) {
    const date = (progresses[i].created_at).split('T')[0]
    const currentDate = $('.btnDate').html()
    console.log(currentDate)
    console.log(progresses.length)
    if (currentDate === date) {
      $('#contentContainer').hide()
      $('#content-progress').show()
      showDate()
      const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
      $('#content-progress').append(showProgressesHtml)
    } else {
      // $('#content-progress').show()
      // $('#main-body').show()
      $('#contentContainer').show()
    }
  }
}

const showProgressesFailure = function () {
  $('#messages').text('Please try again')
}

// if (store.progresses.length !== 2) {
//   $('#navMessages').text('only one submit allowed per day')
// } else {
//   $('#content-progress').append(showProgressesHtml)
// }
const showProgressSuccess = function (responseData) {
  store.progresses = responseData.user.progresses
  $('#content-progress').show()
  console.log(store.progresses.length)
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.user.progresses })
  if (store.progresses.length < 1) {
    $('#messages').text('no progress to show')
  } else {
    $('#contentContainer').hide()
    $('#content-progress').append(showProgressesHtml)
    showDate()
  }
}

const showProgressFailure = function () {
  $('#messages').text('Please try again')
}

const deleteProgressSuccess = function () {
  $('#content-progress').html('')
  // $('#content-progress').hide()
  $('#messages').html('deleted progress successfully')
  $('#contentContainer').show()
}

const deleteProgressFailure = function () {
  $('#messages').html('delete not successful')
}

const updateProgressSuccess = function () {
  console.log('button works')
  $('#messages').html('deleted progress successfully')
  $('form').trigger('reset')
  api.showProgress()
    .then(showProgressSuccess)
    .catch(showProgressFailure)
  $('#main-body-update').hide()
}

const updateProgressFailure = function () {
  $('#messages').html('delete not successful')
}

const getPreviousProgressSuccess = function (responseData) {
  console.log('Previous Button worked')
  console.log(responseData)
  store.progress = responseData.progress
  const currentProgress = store.progress.id
  console.log(currentProgress)
  const showProgressesHtml = showProgressesTemplate({ progresses: responseData.progress.id })
  $('#contentContainer').hide()
  $('#content-progress').append(showProgressesHtml)
  $('#content-progress').show()
}

const getPreviousProgressFailure = function () {
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
  updateProgressSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  getPreviousProgressSuccess,
  getPreviousProgressFailure
}
