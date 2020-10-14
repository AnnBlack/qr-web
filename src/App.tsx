import React from 'react';
import styled from '@emotion/styled';
import {css, Global} from '@emotion/core';
import {BrowserMultiFormatReader, NotFoundException, Result} from '@zxing/library';

//#region styled
const globalStyles = css`
	html,
	body,
	#root {
		padding: 20px;
		margin: 0;
	}
`;
const ResultAreaStyled = styled.div`
	width: 529px;
	height: 400px;
`;
const CameraAreaStyled = styled.div`
	width: inherit;
	height: inherit;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
`;
//#endregion

export const App = React.memo(() => {
	const [deviceId, setDeviceId] = React.useState<string>('');
	const [result, setResult] = React.useState<Result>();
	const [isCameraActive, setIsCameraActive] = React.useState<boolean>(false);
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const codeReader = React.useMemo(() => new BrowserMultiFormatReader(), []);

	React.useEffect(() => {
		navigator.mediaDevices
			.enumerateDevices()
			.then(data => data.map(item => (item.kind === 'videoinput') ? setDeviceId(item.deviceId) : setDeviceId('')))
			.catch(err => console.log(err));
	}, []);

	const start = React.useCallback(() => {
		//decoding starts
		console.log('decoding starts');
		console.log('deviceId', deviceId);
		codeReader
			.decodeFromVideoDevice(deviceId, videoRef.current, (result, error) => {
				setIsCameraActive(true);
				if (result) {
					console.log('result', result);
					setResult(result);
				}
				if (error && !(error instanceof NotFoundException)) {
					console.error('error 1', error);
				}
			})
			.catch(error => {
				console.log('error 2', error);
			});
	}, [codeReader, deviceId]);
	const reset = React.useCallback(() => {
		codeReader.reset();
		setIsCameraActive(false);
	}, [codeReader]);
	return (
		<React.Fragment>
			<Global styles={globalStyles} />

			<ResultAreaStyled>
				{!isCameraActive ? (
					<CameraAreaStyled>
						<button onClick={start}>Activate Camera</button>
					</CameraAreaStyled>
				) : (
					''
				)}
				<video ref={videoRef} autoPlay width={'529'} height={'400'} />
			</ResultAreaStyled>
			<p>result: {result && result.getText()}</p>

			<button onClick={reset}>Turn off Camera</button>
		</React.Fragment>
	);
});
