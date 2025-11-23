

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  let email = document.getElementById('name').value;

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let emailRegex1 = /^[0-9]{8,}$/;
  let emailRegex2 = /[a-zA-Z0-9]+[.-_]/;

  if((emailRegex.test(email)) || (emailRegex1.test(email)) || emailRegex2.test(email)) {
    note.textContent = 'Adresse e-mail valide !';
  } else {
    note.textContent = 'Veuillez saisir une adresse e-mail valide.';
  }
});



































