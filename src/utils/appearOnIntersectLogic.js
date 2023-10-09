export const appearOnIntersect = (refObject, ifClassName, addClassName) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.forEach((value) => {
                    value === ifClassName && refObject.current.classList.add(addClassName)
                });
            }
        })
    });
    observer.observe(refObject.current)
}