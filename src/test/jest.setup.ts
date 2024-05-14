import "@testing-library/jest-dom";

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }

  root = null;
  rootMargin = "";
  thresholds = [0];
  takeRecords = () => [];
};
