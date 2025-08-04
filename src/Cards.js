{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 //Cards.js\
\
import React from 'react';\
\
\
export default function Cards(props) \{\
	return (\
		<div className='card'>\
			<section className='column-left'>\
				<img className="card-img" src="./images/coverImg" alt="images" />\
			</section>\
			<section className='column-right'>\
				<span className='material-symbols-outlined'>location_on</span>\
				<span className="card-country">\{props.item.country\} </span>\
				<a href=\{props.item.googleMapLink\}>View on Google Maps</a>\
				<h3 className="card-country-title">\{props.item.title\}</h3>\
				<h4 className="card-date">\{props.item.date\}</h4>\
				<p>\{props.item.description\}</p>\
				<span>Read more..</span>\
			</section>\
\
		</div>\
	)\
\}}