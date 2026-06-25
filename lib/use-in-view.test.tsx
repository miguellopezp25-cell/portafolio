import { afterEach, beforeEach, describe, it, expect, vi } from "vitest"
import { render, act } from "@testing-library/react"
import { useInView } from "./use-in-view"
import type { FC } from "react"

declare global {
  var __triggerIntersection: (isIntersecting: boolean) => void
}

function createTestComponent(threshold?: number): [() => boolean, FC] {
  let getInView = () => false
  const Component: FC = () => {
    const { ref, inView } = useInView(threshold)
    getInView = () => inView
    return <div ref={ref} data-testid="observed" />
  }
  return [() => getInView(), Component]
}

describe("useInView", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: vi.fn().mockReturnValue({
        matches: false,
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns inView=false initially", () => {
    const [getInView, Component] = createTestComponent()
    render(<Component />)
    expect(getInView()).toBe(false)
  })

  it("sets inView=true when entry is intersecting", () => {
    const [getInView, Component] = createTestComponent(0.1)
    render(<Component />)

    act(() => {
      globalThis.__triggerIntersection(true)
    })

    expect(getInView()).toBe(true)
  })

  it("unobserves after first intersection (once-fire)", () => {
    const unobserve = vi.spyOn(window.IntersectionObserver.prototype, "unobserve")
    const [getInView, Component] = createTestComponent(0.1)
    render(<Component />)

    act(() => {
      globalThis.__triggerIntersection(true)
    })

    expect(getInView()).toBe(true)
    expect(unobserve).toHaveBeenCalledOnce()
  })

  it("disconnects on unmount", () => {
    const disconnect = vi.spyOn(window.IntersectionObserver.prototype, "disconnect")
    const [, Component] = createTestComponent()
    const { unmount } = render(<Component />)
    unmount()
    expect(disconnect).toHaveBeenCalledOnce()
  })

  it("sets inView=true immediately when reduced motion is preferred", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })

    const observe = vi.spyOn(window.IntersectionObserver.prototype, "observe")
    const [getInView, Component] = createTestComponent()
    render(<Component />)

    expect(getInView()).toBe(true)
    expect(observe).not.toHaveBeenCalled()
  })
})
