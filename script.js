document.addEventListener('DOMContentLoaded', ()=>{
  const form =  document.getElementById ('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event){
    event.preventDefault();
  })
 const name= document.getElementById('username').value.trim();
 const email= document.getElementById('email') .value.trim();
 const password= document.getElementById('password').value.trim();

 let isValid ="true";
 const message=[];

 if (username.length< 3 ){
    isValid= false;
    messages.push("Name must not me less than 3 characters");
 }
 if (email.includes('@')|| email.includes('.')){
    isValid=false;
    messages.push("Please enter a valid email");

 }
 if(password.length< 8){
    isValid= false;
    messages.push("Password must be atleast 8 characters");

 }
 feedbackDiv.style.display ='block';
 if(isValid){
     feedbackBox.textContent = 'Registration successful!';
      feedbackBox.style.color = '#28a745';
    } else {
      feedbackBox.innerHTML = errors.join('<br>');
      feedbackBox.style.color = '#dc3545';
 }

})