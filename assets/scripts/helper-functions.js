'use strict'

const showDate = function () {
  const n = new Date()
  const y = n.getFullYear()
  let m = ''
  const num = 1
  const month = parseInt(n.getMonth())
  const currentMonth = (month + num).toString()
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

const onModalFade = function () {
  $(this).find('.modal-messages').text('')
  $(this).find('form').trigger('reset')
}

module.exports = {
  showDate,
  changeBackground,
  onModalFade
}
