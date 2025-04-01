import React from 'react';
import './styles/globals.css';

const Loading: React.FC = () => {
	return (
		<div className="loadingContainer">
			<div className="loadingSpinner"></div>
			<p className="loadingText">Loading...</p>
		</div>
	);
};

export default Loading;