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
  console.log(target.id, target.value)
  inputBean[target.id] = target.value
}

document.getElementById('confirmPsw').addEventListener('input', (event) => {
  const p = document.getElementById('confirmPswError')
  alert('change')
  if (inputBean.psw !== event.target.value) {
    p.style.visibility = ''
    p.innerText = 'different from password.'
  } else {
    p.innerText = ''
    p.style.visibility = 'hidden'
  }
  console.log('changeConfirmPsw')
})
