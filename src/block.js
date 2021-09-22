export default function Block( { color, headingSize = 1 } ) {
	const HeadingTag = `h${ headingSize }`;
	return (
		<div className="wc-interactive-block" style={ { color } }>
			<HeadingTag>Your Magic here</HeadingTag>
		</div>
	);
}
