var contactUsButton = document.getElementsByClassName('contactUsButton');
var contactUsContainer = document.getElementsByClassName('contactUsContainer');

var contactUsToogle = 1;
function toogleContact() {
  if(contactUsToogle){
    contactUsContainer[0].style.width = '100%';
    contactUsToogle = 0;
  }else{
    contactUsContainer[0].style.width = '0%';
    contactUsToogle = 1;
  }
}

contactUsButton[0].addEventListener('click',toogleContact);
