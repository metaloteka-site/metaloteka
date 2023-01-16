import {AccordionControl} from './AccordionControl.js';

export function Accordion() {
	const elems = document.querySelectorAll('.accordion');

	if (elems) {
		elems.forEach((item) => {
			new AccordionControl(item);
		});
	}
}

