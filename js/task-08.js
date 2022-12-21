const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   if (email === '' || password === '') {
//     alert('Всі поля мають бути заповнені');
//   } else {
//     formData.forEach((names, value) => {
//       console.log(value, names);
//     });
//   }
//   form.reset();
// }

function onFormSubmit(event) {
  event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    alert('Всі поля мають бути заповнені');
  } else {
    console.log(formData);
  }
  form.reset();
}
