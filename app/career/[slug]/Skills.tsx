'use client'
import React, { useEffect } from 'react';

const Skills = () => {

	useEffect(() => {
		console.log('useEffect');
		// window.onload = function() {
		// 	console.log('onload');
		// 	var svg = document.getElementById('snake-line');
		// 	if (!svg) {
		// 		console.log('svg not found');
		// 		return;
		// 	};
		// 	console.log('svg found');
		// 	var paragraphs = document.getElementsByClassName('paragraph');
		// 	var path = 'M10,50';
		
		// 	for (var i = 0; i < paragraphs.length; i++) {
		// 		var rect = paragraphs[i].getBoundingClientRect();
		// 		var x = i % 2 === 0 ? 10 : 90;
		// 		var y = rect.top + rect.height / 2;
		// 		path += ' Q50,' + y + ' ' + x + ',' + (y + rect.height);
		// 	}
		
		// 	var snakeLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		// 	snakeLine.setAttribute('d', path);
		// 	snakeLine.setAttribute('fill', 'transparent');
		// 	snakeLine.setAttribute('stroke', '#000');
		// 	snakeLine.setAttribute('stroke-width', '2');
		// 	svg.appendChild(snakeLine);
		// }
		window.onscroll = function() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			// - document.documentElement.clientHeight
			var height = document.documentElement.offsetHeight - (document.documentElement.clientHeight/2) ;
			var scrolled = (winScroll / height) * 100;
			const line = document.getElementById("glow-line");
			if (!line) return;
			line.style.height = scrolled + "%";
		}
		
	}, []);

	return (
		<div className='snake-container'>
			<svg id='snake-line'></svg>
			<div id="line"></div>
			<div id="glow-line"></div>
			<p className='paragraph'>This is paragraph 1</p>
			<p className='paragraph'>This is paragraph 2</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 1</p>
			<p className='paragraph'>This is paragraph 2</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
			<p className='paragraph'>This is paragraph 3</p>
		</div>
	);
};

export default Skills;
