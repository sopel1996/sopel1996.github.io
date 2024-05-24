function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        } 
        // else {
        //     change.target.classList.remove('element-show');
        // }
    });
}

let options = {
    threshold: [0.25]
};
// let w = window.innerWidth;
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.card');
// if (w > 767) {
for (let elm of elements) {
    observer.observe(elm);
}
// }