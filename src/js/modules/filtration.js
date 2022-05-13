export const getItemsFiltration = (...item) => {

	item.forEach((element) => {
		const ItemsFiltration = document.querySelectorAll(element);
		ItemsFiltration.forEach((el) => {
			console.log(el)
		})
	})
}
