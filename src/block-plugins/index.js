import {
	Button,
	CheckboxControl,
	__experimentalInputControl as InputControl,
	__experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
	ToggleControl,
	__experimentalVStack as VStack,
	DatePicker,
} from '@wordpress/components';
import { useCopyToClipboard } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';
import { PluginPostStatusInfo } from '@wordpress/editor';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { copySmall } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { registerPlugin } from '@wordpress/plugins';
import { getSettings as getDateSettings, dateI18n } from '@wordpress/date';

/**
 * Get TimeStamp with WP Settings Timezone..
 *
 * @param {*} dateObj Date object.
 * @param {*} nextDays Number of days to add.
 *
 * @returns
 */
const getWPTimeStamp = ( dateObj = 'now', nextDays = 0 ) => {
	const { timezone } = getDateSettings();
	const date = 'now' === dateObj ? new Date() : dateObj;

	// If nextDays is set, add the days to the date.
	if ( nextDays > 0 ) {
		date.setDate( date?.getDate() + nextDays );
	}

	return dateI18n( 'U', date?.getTime() + timezone?.offset * 1000 );
}

/**
 * Share Post Preview Info.
 */
function SharePostPreview() {
	const wpCurrentTimeStamp = getWPTimeStamp();
	const defaultDatePickerStamp = getWPTimeStamp( 'now', 2 );
	const { editPost } = useDispatch( 'core/editor' );
	const { postID, previewLink, postStatus, meta } = useSelect( ( select ) => {
		const editor = select( 'core/editor' );
		const previewLink = editor?.getEditedPostAttribute( 'preview_link' ) || '';
		return {
			postID: editor?.getCurrentPostId() || 0,
			previewLink: previewLink ? previewLink + '&preview=true' : '',
			postStatus: editor?.getEditedPostAttribute( 'status' ) || '',
			meta: editor?.getEditedPostAttribute( 'meta' ) || {},
		};
	}, [] );
	const [ sharePostPreviewLink, setSharePostPreviewLink ] = useState( previewLink || '' );
	const [ loading, setLoading ] = useState( false );
	const [ isChecked, setIsChecked ] = useState(
		meta?.spp_enable_preview || false
	);
	const [ isNoExpire, setIsNoExpire ] = useState(
		'no-expire' === meta?.spp_expire || false
	);
	const [ timestamp, setTimeStamp ] = useState( () => {
		return ( meta?.spp_expire && 'no-expire' !== meta?.spp_expire ) ? meta?.spp_expire : defaultDatePickerStamp;
	} );
	const { createNotice } = useDispatch( noticesStore );

	const copyButtonRef = useCopyToClipboard( sharePostPreviewLink, () => {
		createNotice( 'info', __( 'Share Preview Link copied to clipboard.', 'share-post-preview' ), {
			isDismissible: true,
			type: 'snackbar',
		} );
	} );

	const setPostToken = ( expireTimeStamp, noExpire, isChecked ) => {
		setLoading( true );
		const expire = noExpire ? 'no-expire' : expireTimeStamp.toString();
		const response = wp.ajax.post( 'get_share_post_preview_token',
			{
				post_id: postID,
				expire: expire
			}
		);

		response.done( ( response ) => {
			if ( response?.token ) {
				setSharePostPreviewLink( previewLink + '&spp_token=' + response?.token );
			}
		}, 'json' );

		response.always( () => {
			setLoading( false );
		} );

		editPost( {
			meta: { ...meta, spp_enable_preview: !! isChecked, spp_expire: isChecked ? expire : '' },
		} );
	};

	useEffect( () => {
			setPostToken( timestamp, isNoExpire, isChecked );
	}, [ timestamp, isNoExpire, isChecked ] );

	// Do not show the settings if the post is not published.
	if ( [ 'publish', 'private', 'auto-draft' ].includes( postStatus ) ) {
		return null;
	}

	return (
		<VStack>
			<ToggleControl
				label={ __( 'Enable Share Preview', 'share-post-preview' ) }
				checked={ isChecked }
				disabled={ loading }
				onChange={ ( value ) => {
					setIsChecked( value );
				} }
			/>
			{ isChecked && (
				<>
					<InputControl
						label={ __( 'Copy Share Preview Link', 'share-post-preview' ) }
						hideLabelFromVision
						autoComplete="off"
						spellCheck="false"
						value={ sharePostPreviewLink }
						type="text"
						disabled
						suffix={
							<InputControlSuffixWrapper>
								<Button
									icon={ copySmall }
									ref={ copyButtonRef }
									size="small"
									label={ __( 'Copy Share Link', 'share-post-preview' ) }
								/>
							</InputControlSuffixWrapper>
						}
					/>
					<CheckboxControl
						label={ __( 'Don\'t Expire.', 'share-post-preview' ) }
						checked={ isNoExpire }
						disabled={ loading }
						onChange={ ( value ) => {
							setIsNoExpire( value );
						} }
					/>
					{ !isNoExpire && (
						<DatePicker
							disabled={ loading }
							currentDate={ new Date( timestamp * 1000 ) }
							onChange={ ( newDate ) => {
								const newTimeStamp = Math.floor( new Date( newDate ).getTime() / 1000);
								setTimeStamp( newTimeStamp );
							} }
							isInvalidDate={ ( invalidDate ) => {
								return invalidDate < new Date( wpCurrentTimeStamp * 1000 );
							}}
						/>
					)}
				</>
			) }
		</VStack>
	);
}

/**
 * Share Post Preview Settings Plugin.
 */
function SharePostPreviewPlugin() {
	return (
		<PluginPostStatusInfo>
			<SharePostPreview />
		</PluginPostStatusInfo>
	);
}

registerPlugin( 'share-post-preview', { render: SharePostPreviewPlugin } );
