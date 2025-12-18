export interface ScrollRevealOptions {
  animation?: 'fade-in' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  immediate?: boolean;
}

export function scrollReveal(
  node: HTMLElement,
  options: ScrollRevealOptions = {}
) {
  const {
    animation = 'fade-in',
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    immediate = false
  } = options;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    return {
      destroy: () => {}
    };
  }

  if (!node.classList.contains('scroll-reveal')) {
    node.classList.add('scroll-reveal');
  }
  if (animation !== 'fade-in' && !node.classList.contains(animation)) {
    node.classList.add(animation);
  }

  if (delay > 0) {
    node.style.transitionDelay = `${delay}ms`;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            node.classList.add('is-visible');
          }, 10);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          node.classList.remove('is-visible');
        }
      });
    },
    {
      threshold,
      rootMargin
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
