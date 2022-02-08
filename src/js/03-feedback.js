import * as storage from '../services/localStorage';
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form")
}
const STORAGE_KEY = "feedback-form-state";

function onFormInput(e){
    const {name, value} = e.target

    const parsedData = storage.get(STORAGE_KEY) || {};
    const formData = {
        ...parsedData,
        [name]:value
    }
    storage.save(STORAGE_KEY, formData);
}

const reuseData = () => {
    const parsedData = storage.get(STORAGE_KEY) || {};
    const inputNames = Object.keys(parsedData);

  inputNames.forEach(inputName => {
    const input = refs.form.elements[inputName];
    input.value = parsedData[inputName];
});
}

reuseData()

const onSumbitClick = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const finalData = {};
  
    for (const [key, value] of formData.entries()) {
      if (!value) {
        alert('Please fill in all the fields!');
        return;
      }
      finalData[key] = value;
    }
  
    console.log(finalData);
    form.reset();
    storage.remove(STORAGE_KEY);
  };


refs.form.addEventListener('input', throttle((onFormInput),500))
refs.form.addEventListener('submit', onSumbitClick)

