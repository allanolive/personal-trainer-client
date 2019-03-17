'use strict'

const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const submit = function (weight, calories, protein, carbohydrate, fat, sugar, fiber, cardio) {
  return $.ajax({
    url: config.apiUrl + '/progresses',
    method: 'POST',
    data: {
      'progress': {
        'weight': `${weight}`,
        'calories': `${calories}`,
        'protein': `${protein}`,
        'carbohydrate': `${carbohydrate}`,
        'fat': `${fat}`,
        'sugar': `${sugar}`,
        'fiber': `${fiber}`,
        'cardio': `${cardio}`
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const showProgresses = function () {
//   return $.ajax({
//     url: config.apiUrl + '/progresses',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const showProgress = function () {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteProgress = function (id) {
  return $.ajax({
    url: config.apiUrl + '/progresses/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProgress = function (id, weight, calories, protein, carbohydrate, fat, sugar, fiber, cardio) {
  return $.ajax({
    url: config.apiUrl + '/progresses/' + id,
    method: 'PATCH',
    data: {
      'progress': {
        'weight': `${weight}`,
        'calories': `${calories}`,
        'protein': `${protein}`,
        'carbohydrate': `${carbohydrate}`,
        'fat': `${fat}`,
        'sugar': `${sugar}`,
        'fiber': `${fiber}`,
        'cardio': `${cardio}`
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  submit,
  // showProgresses,
  showProgress,
  deleteProgress,
  updateProgress
}
