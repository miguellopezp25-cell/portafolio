import "@testing-library/jest-dom/vitest"

const intersectionCallbacks = new Map<Element, IntersectionObserverCallback>()

;(globalThis as any).__triggerIntersection = (isIntersecting: boolean) => {
  for (const cb of intersectionCallbacks.values()) {
    cb([{ isIntersecting, intersectionRatio: isIntersecting ? 1 : 0 } as IntersectionObserverEntry], null as unknown as IntersectionObserver)
  }
}

class MockIntersectionObserver {
  private cb: IntersectionObserverCallback

  constructor(cb: IntersectionObserverCallback) {
    this.cb = cb
  }

  observe(el: Element) {
    intersectionCallbacks.set(el, this.cb)
  }

  unobserve(_el: Element) {
    intersectionCallbacks.delete(_el)
  }

  disconnect() {
    intersectionCallbacks.clear()
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})
