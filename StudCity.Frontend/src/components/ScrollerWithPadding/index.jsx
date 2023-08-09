import React, { useRef, useEffect } from 'react';

const ScrollerWithPadding = ({ children, className = '' }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const containerElement = containerRef.current;
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const hasScrollbar = entry.target.scrollHeight > entry.target.clientHeight;
				if (!hasScrollbar) {
					entry.target.style.paddingRight = '15px';
				} else {
					entry.target.style.paddingRight = '0';
				}
			}
		});

		observer.observe(containerElement);

		return () => {
			observer.unobserve(containerElement);
		};

	}, []);


	return (
		<div ref={containerRef} className={`h-full w-full overflow-y-auto ${className}`}>
			{children}
		</div >
	)
}

export default ScrollerWithPadding;