import { useLayoutEffect, useRef, useState } from "react"

// Define Position Type
type Position = {
	x: number // X coordinate of mouse cursor relative to the page
	y: number // Y coordinate of mouse cursor relative to the page
	elementX: number // X coordinate of mouse cursor relative to the element's top-left corner
	elementY: number // Y coordinate of mouse cursor relative to the element's top-left corner
	elementPositionX: number // X coordinate of the element relative to the page
	elementPositionY: number // Y coordinate of the element relative to the page
}

// Define hook return type
type ReturnType = [
	position: Position,
	ref: any,
	isIntersecting: boolean,
	xIntersecting?: boolean,
	yIntersecting?: boolean
]

const useMouse = (): ReturnType => {
	const [position, setPosition] = useState<Position>({
		x: 0,
		y: 0,
		elementPositionX: 0,
		elementPositionY: 0,
		elementX: 0,
		elementY: 0,
	})

	const [width, setWidth] = useState<number>(0)
	const [height, setHeight] = useState<number>(0)

	const ref = useRef<any>(null)

	useLayoutEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			// Create object with new mouse cursor position relative to the page.
			let newState: Position = {
				...position,
				x: event.pageX,
				y: event.pageY,
			}

			// Check if ref is attached to an element type.
			// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
			if (ref.current?.nodeType === Node.ELEMENT_NODE) {
				const { left, top } = ref.current.getBoundingClientRect()
				setWidth(ref.current.offsetWidth)
				setHeight(ref.current.offsetHeight)
				const elementPositionX = left + window.scrollX
				const elementPositionY = top + window.scrollY
				const elementX = event.pageX - elementPositionX
				const elementY = event.pageY - elementPositionY

				newState.elementX = elementX
				newState.elementY = elementY
				newState.elementPositionX = elementPositionX
				newState.elementPositionY = elementPositionY
			}

			setPosition((s) => {
				return {
					...s,
					...newState,
				}
			})
		}

		// Attach event listener to document
		document.addEventListener("mousemove", handleMouseMove)

		// Cleanup function
		return () => {
			document.removeEventListener("mousemove", handleMouseMove)
		}
	}, [])

	const xIntersecting = position.elementX > 0 && position.elementX < width
	const yIntersecting = position.elementY > 0 && position.elementY < height
	const isIntersecting = xIntersecting && yIntersecting

	return [position, ref, isIntersecting, xIntersecting, yIntersecting]
}

export default useMouse
