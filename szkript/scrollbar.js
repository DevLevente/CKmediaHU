document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    body.addEventListener('mouseenter', () => {
        body.classList.add('show-scrollbar');
        body.classList.remove('hidden-scrollbar');
    });

    body.addEventListener('mouseleave', () => {
        if (!body.matches(':hover')) {
            body.classList.add('hidden-scrollbar');
            body.classList.remove('show-scrollbar');
        }
    });

    window.addEventListener('scroll', () => {
        body.classList.add('show-scrollbar');
        body.classList.remove('hidden-scrollbar');
    });

    body.addEventListener('focusout', () => {
        if (!body.matches(':hover')) {
            body.classList.add('hidden-scrollbar');
            body.classList.remove('show-scrollbar');
        }
    });
});
