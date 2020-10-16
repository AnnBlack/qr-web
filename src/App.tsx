import React from 'react';
import styled from '@emotion/styled';
import {css, Global} from '@emotion/core';
import {BrowserMultiFormatReader, NotFoundException, Result} from '@zxing/library';
import {Option} from 'fp-ts/Option';
import {option} from 'fp-ts';
import {pipe} from 'fp-ts/pipeable';
import {flow} from 'fp-ts/function';

//#region styled
const globalStyles = css`
	html,
	body,
	#root {
		padding: 0;
		margin: 0;
	}
`;
const WrapperStyled = styled.div`
	max-width: 400px;
	height: 200px;
	padding: 5px;
`;
const CameraAreaStyled = styled.div`
	width: inherit;
	height: inherit;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ResultAreaStyled = styled.div`
	padding: 5px;
`;
const SelectStyled = styled.select`
	display: flex;
	margin-bottom: 15px;
	option {
		height: 20px;
	}
`;
//#endregionƒ

export const App = React.memo(() => {
	const [deviceId, setDeviceId] = React.useState<string>('');
	const [result, setResult] = React.useState<Option<Result>>(option.none);
	const [isCameraActive, setIsCameraActive] = React.useState<boolean>(false);
	const [deviceInfo, setDeviceInfo] = React.useState<Array<MediaDeviceInfo>>([]);
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const codeReader = React.useMemo(() => new BrowserMultiFormatReader(), []);

	React.useEffect(() => {
		navigator.mediaDevices
			.enumerateDevices()
			.then(data =>
				data.map(item => (item.kind === 'videoinput' ? setDeviceInfo(prev => [...prev, item]) : setDeviceInfo(prev => [...prev]))),
			)
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
					setResult(option.some(result));
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

	const getResult = React.useMemo(
		() =>
			pipe(
				result,
				option.map(res => res.getText()),
				option.fold(
					() => <p>No result</p>,
					flow(
						option.fromNullable,
						option.getOrElse<React.ReactNode>(() => <p>No result</p>),
						result => <p>Result: {result}</p>,
					),
				),
			),
		[result],
	);

	React.useEffect(() => console.log('deviceInfo', deviceInfo), [deviceInfo]);

	const handleChange = React.useCallback(event => {
		setDeviceId(event.target.value);
	}, []);
	return (
		<React.Fragment>
			<Global styles={globalStyles} />

			<WrapperStyled>
				{!isCameraActive ? (
					<CameraAreaStyled>
						<button onClick={start}>Activate Camera</button>
					</CameraAreaStyled>
				) : (
					''
				)}
				<video ref={videoRef} autoPlay width={'100%'} height={'200'} />
			</WrapperStyled>
			<ResultAreaStyled>
				{getResult}
				<SelectStyled onChange={handleChange}>
					{deviceInfo.map(device => (
						<option key={device.deviceId} value={device.deviceId}>
							{device.label}
						</option>
					))}
				</SelectStyled>
				<button onClick={reset}>Turn off Camera</button>
			</ResultAreaStyled>
		</React.Fragment>
	);
});
