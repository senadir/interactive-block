/* eslint-disable jsdoc/require-param-type */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import HeadingToolbar from './components/heading-toolbar';
import Block from './block';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @param  props.attributes
 * @param  props.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { headingSize } = attributes;
	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<HeadingToolbar
					isCollapsed={ true }
					minLevel={ 1 }
					maxLevel={ 7 }
					selectedLevel={ headingSize }
					onChange={ ( newLevel ) =>
						setAttributes( { headingSize: newLevel } )
					}
				/>
			</BlockControls>
			<Block { ...attributes } />
		</div>
	);
}
