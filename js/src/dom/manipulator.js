/**
 * Based on Boostrap v5.1.3 - tab.js - MIT
 */

function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-mellow-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-mellow-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    const mellowKeys = Object.keys(element.dataset).filter(key => key.startsWith('mellow'));

    for (const key of mellowKeys) {
      let pureKey = key.replace(/^mellow/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }

    return attributes;
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-mellow-${normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();

    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }
};

export default Manipulator;
