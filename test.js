document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('test');

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add('visible');
                observer.disconnect();
            }
        });
    }

    const observer = new IntersectionObserver(callback, {
        threshold: 0.1
    });

    observer.observe(target);
});