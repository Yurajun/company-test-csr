import MediumEditor from 'medium-editor';

const desc = document.querySelector('.description__box');

const description = new MediumEditor(desc, {    // eslint-disable-line no-unused-vars
	toolbar: false
});
