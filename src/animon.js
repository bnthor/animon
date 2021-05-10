/**
 * Animate elements when they appeat in the viewport
 * @param { IntersectionObserverEntry[] } changes: IntersectionObserver changes
 */
const animonCallback = function(changes) {
    changes.forEach(change => {
        let target = change.target;
        let delay = parseInt(target.getAttribute('data-delay')) || 0;
        let duration = target.getAttribute('data-duration') || null;
        if (change.intersectionRatio > 0) {
            setTimeout(() => {
                if (duration) {
                    target.style.transitionDuration = `${duration}, ${duration}`;
                }
                target.classList.add('is-visible');
            }, delay);
        } else {
            target.classList.remove('is-visible');
            target.style.removeProperty('transition-duration');
        }
    });
};


/**
 * Create a new IntersectionObserver object
 * @param { Function } animonCallback: function to be executed
 */
const observer = new IntersectionObserver(animonCallback);


/**
 * Animon's initialisation
 * @param { String } selector: items that should be animated
 */
const animon = (selector = '.animonItem') => {
    // Build our nodes list
    const nodes = document.querySelectorAll(selector);

    // If IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        // Observe each node
        nodes.forEach((node) => {
            observer.observe(node);
        });
    } else {
    // Else make every node visible
        nodes.forEach((node) => node.classList.add('is-visible'));
    }
};


// Export animon
export { animon };
