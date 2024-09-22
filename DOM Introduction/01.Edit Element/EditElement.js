function editElement(ref, match, replacer) {
    let h1El = ref.textContent;
    while (h1El.includes(match)) {
        h1El = h1El.replace(match, replacer);
    }
    ref.textContent = h1El;
}