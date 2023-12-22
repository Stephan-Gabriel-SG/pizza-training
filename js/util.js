let inputBean = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  psw: '',
}

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('submit')
  const inputs = document.getElementsByTagName('input')
  // for (let index = 0; index < inputs.length - 1; index++) {
  //   console.log(inputs[index].checkValidity())
  // }
}
const handleChangeInput = ({ target }) => {
  inputBean[target.id] = target.value
  if (target.id === 'psw') {
    handleVerifyConfirmPsw()
  }
}

const handleVerifyConfirmPsw = (event) => {
  const p = document.getElementById('confirmPswError')
  let confirmPsw
  if (event) {
    confirmPsw = event.target.value
  } else {
    confirmPsw = document.getElementById('confirmPsw').value
  }
  if (inputBean.psw !== confirmPsw) {
    p.style.visibility = ''
    p.innerText = 'different from password.'
  } else {
    p.innerText = ''
    p.style.visibility = 'hidden'
  }
}
const switchShowPsw = (inputId, value) => {
  if (value) {
    document.getElementById(inputId).setAttribute('type', 'text')
  } else {
    document.getElementById(inputId).setAttribute('type', 'password')
  }
}
document.getElementById('showPsw').addEventListener('click', (event) => {
  switchShowPsw('psw', event.target.checked)
})
document.getElementById('showConfirmPsw').addEventListener('click', (event) => {
  switchShowPsw('confirmPsw', event.target.checked)
})
