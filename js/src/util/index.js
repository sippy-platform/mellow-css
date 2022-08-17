/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.0): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend';

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = (object) => {
  if (object === null || object === undefined) {
    return `${object}`;
  }

  return Object.prototype.toString
    .call(object)
    .match(/\s([a-z]+)/i)[1]
    .toLowerCase();
};

/**
 * Public Util API
 */
const getSelector = (element) => {
  let selector = element.getAttribute('data-mellow-target');

  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (
      !hrefAttribute ||
      (!hrefAttribute.includes('#') && !hrefAttribute.startsWith('.'))
    ) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }

    selector =
      hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }

  return selector;
};

const getElementFromSelector = (element) => {
  const selector = getSelector(element);

  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } =
    window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (
    (Number.parseFloat(transitionDuration) +
      Number.parseFloat(transitionDelay)) *
    MILLISECONDS_MULTIPLIER
  );
};

const triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = (object) => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = (object) => {
  if (isElement(object)) {
    return object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const isVisible = (element) => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  const elementIsVisible =
    getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])');

  if (!closedDetails) {
    return elementIsVisible;
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }

    if (summary === null) {
      return false;
    }
  }

  return elementIsVisible;
};

const isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return (
    element.hasAttribute('disabled') &&
    element.getAttribute('disabled') !== 'false'
  );
};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = (element) => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

const execute = (callback) => {
  if (typeof callback === 'function') {
    callback();
  }
};

const executeAfterTransition = (
  callback,
  transitionElement,
  waitForTransition = true
) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration =
    getTransitionDurationFromElement(transitionElement) + durationPadding;

  let called = false;

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

export {
  execute,
  executeAfterTransition,
  getElement,
  getElementFromSelector,
  getTransitionDurationFromElement,
  isDisabled,
  isElement,
  isVisible,
  reflow,
  triggerTransitionEnd,
  toType,
};
