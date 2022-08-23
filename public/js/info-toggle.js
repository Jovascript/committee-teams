(function() {
	const npseudo_h = document.querySelectorAll('[data-more-info]');
	Array.prototype.forEach.call(npseudo_h, h => {
		let t = h.nextElementSibling;
		h.onclick = (e) => {
			let ex = h.getAttribute('aria-expanded') === 'true' || false;
			h.setAttribute('aria-expanded', !ex);
			t.hidden = ex;
			e.preventDefault();
		}
	});
}());
