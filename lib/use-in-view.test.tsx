import { describe, it, expect, vi } from "vitest"
import { render, act, screen } from "@testing-library/react"
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
})
