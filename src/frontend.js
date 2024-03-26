import { createRoot, render, Suspense } from '@wordpress/element';
import Block from './block';

const RenderBlock = (attributes) => {
	return (
		<Suspense fallback={ <div className="wp-block-placeholder" /> }>
			<Block { ...attributes } />
		</Suspense>
	)
};

window.addEventListener( 'DOMContentLoaded', () => {
	const element = document.querySelector(
		'.wp-block-create-block-interactive-block'
	);
	if ( element ) {
		const attributes = { ...element.dataset };
		if ( createRoot ) {
			createRoot( element ).render( <RenderBlock {...attributes} /> );
		} else {
			render( <RenderBlock {...attributes} />, element );
		}
	}
} );
