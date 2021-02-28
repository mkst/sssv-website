import React from 'react'

import './Header.scss'

export const Header = ({
}) => {

  return (
    <div className='header'>
  		<div className='flex'>
  			<div className='bar-left'>
  				<div className='inner'>
            <div className='text'>
              SPACE STATION SILICON VALLEY
            </div>
  				</div>
  			</div>
  			<div className='bar-right'>
  				<div className='inner'>
  				</div>
  			</div>
  		</div>
  		<div className='bottom'>
  			<div className='inner'>
  				<div className='text'>
  					DECOMPILATION PROJECT
  				</div>
  				<div className='flex marker-accent-container'>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent yellow' gradient='green-yellow'></div>
  					<div className='marker-accent yellow'></div>
  					<div className='marker-accent orange' gradient='yellow-orange'></div>
  					<div className='marker-accent red' gradient='orange-red'></div>
  					<div className='marker-accent red'></div>
  					<div className='marker-accent magenta' gradient='red-magenta'></div>
  					<div className='marker-accent purple' gradient='magenta-purple'></div>
  					<div className='marker-accent blue' gradient='purple-blue'></div>
  					<div className='marker-accent cyan' gradient='blue-cyan'></div>
  					<div className='marker-accent cyan'></div>
  					<div className='marker-accent blue' gradient='cyan-blue'></div>
  					<div className='marker-accent blue'></div>
  					<div className='marker-accent purple' gradient='blue-purple'></div>
  					<div className='marker-accent magenta' gradient='purple-magenta'></div>
  					<div className='marker-accent red' gradient='magenta-red'></div>
  					<div className='marker-accent orange' gradient='red-orange'></div>
  					<div className='marker-accent yellow' gradient='orange-yellow'></div>
  					<div className='marker-accent yellow'></div>
  					<div className='marker-accent green' gradient='yellow-green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-accent green'></div>
  					<div className='marker-end'>
  						<div className='glyph'>
  							:&#8593;&#8595;%
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  )
}
