const getTamplate = (data = [], placeholder, selectedValue) => {
	let text = placeholder ?? 'Select item please';

	const itemsSelect = data.map(item => {
		let classItem = '';
		if (item.value === selectedValue) {
			text = item.textItem;
			classItem = 'selected';
		}

		return `
		<li class="custom-select__item ${classItem}" data-type="select-item" data-value=${item.value}>${item.textItem}</li>
		`
	});

	return `
	<div class="custom-select__backdrop" data-type="select-backdrop"></div>
	<div class="custom-select__input input-custom-select" data-type="select-input">
	<span class="input-custom-select__text" data-type="select-input-text">${text}</span>
	<span class="input-custom-select__arrow"></span>
	</div>
	<div class="custom-select__dropdown">
		<ul class="custom-select__list">
			${itemsSelect.join('')}
		</ul>
	</div>
	`
}

export class customSelect {
	constructor(selector, options) {
		const selectors = document.querySelectorAll(selector);
		selectors.forEach(el => {
			this.$element = el;
		});

		this.options = options;
		this.selectedValue = options.selectedValue;

		this.#render();
		this.#setup();
	}

	#render() {
		const { data, placeholder } = this.options;
		this.$element.classList.add('custom-select');
		this.$element.innerHTML = getTamplate(data, placeholder, this.selectedValue);
	}

	#setup() {
		this.clickHandler = this.clickHandler.bind(this);
		this.$element.addEventListener('click', this.clickHandler);
		this.$inputText = this.$element.querySelector('[data-type="select-input-text"]');
	}

	clickHandler(evt) {
		const { type } = evt.target.dataset;
		if (type === 'select-input') {
			this.toggle();
		} else if (type === 'select-item') {
			const value = evt.target.dataset.value
			// console.log('value', value)
			this.select(value);
		} else if (type === 'select-backdrop') {
			this.close();
		}
	}

	get isOpen() {
		return this.$element.classList.contains('__open');
	}
	get current() {
		return this.options.data.find(item => item.value === this.selectedValue)
	}

	select(value) {
		this.selectedValue = value;
		this.$inputText.textContent = this.current.textItem;
		this.$element.querySelectorAll('[data-type="select-item"]').forEach(element => {
			element.classList.remove('selected');
		});
		this.$element.querySelector(`[data-value="${value}"]`).classList.add('selected');
		this.options.onSelect ? this.options.onSelect(this.current) : null;
		this.close();
	}

	toggle() {
		this.isOpen ? this.close() : this.open();

	}

	open() {
		this.$element.classList.add('__open');
	}

	close() {
		this.$element.classList.remove('__open');
	}

	reset() {
		const { data, selectedValue, placeholder } = this.options;
		this.$element.querySelectorAll('[data-type="select-item"]').forEach(element => {
			element.classList.remove('selected');
		});

		data.map(item => {
			if (item.value === selectedValue && !placeholder) {
				this.$inputText.textContent = item.textItem;
			}
		});

		if (placeholder) {
			this.$inputText.textContent = placeholder;
		}
	}

	kill() {
		this.$element.removeEventListener('click', this.clickHandler);
		this.$element.innerHTML = '';
	}
}
