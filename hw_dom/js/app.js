document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('#new-item-form');
  submit.addEventListener('submit', handleFormSubmit);
  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('submit', handleElementDelete);
})

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event);
  const type = event.target.type.value;
  const baker = event.target.baker.value;
  const amount = event.target.amount.value;
  const diet = event.target.diet.value

  const outputCake = document.createElement('li')
  outputCake.textContent = `CAKE:  ${type}, BAKED BY:  ${baker}, AMOUNT:  ${amount} pieces, ${diet}`;
  outputCake.classList.add('cake');

  const list = document.querySelector('#cakes-for-sale');
  list.appendChild(outputCake);
  const submit = document.querySelector('#new-item-form');
  submit.reset();
};

const handleElementDelete = function(event){
  const listDiv = document.querySelector('#cakes-for-sale-div')
  listDiv.removeChild(list);
};
