const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshhold: 0,
    rootMargin: 0px 0px 50px 0px;
};

const preloadImage = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    });
} else {}