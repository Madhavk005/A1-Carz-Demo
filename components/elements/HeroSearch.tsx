'use client'
import Link from 'next/link'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import MyDatePicker from './MyDatePicker'

export default function HeroSearch() {
	return (
		<>
			<div className="box-bottom-search background-card">
				<div className="item-search">
					<label className="text-sm-bold neutral-500">Pick Up Location</label>
					<Dropdown className="dropdown">
						<Dropdown.Toggle as="div" className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"  aria-expanded="false">Jaipur</Dropdown.Toggle>
						<Dropdown.Menu as="ul" className="dropdown-menu">
							<li>
								<Link className="dropdown-item" href="#">Hawa Mahal</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">City Palace</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Jal Mahal</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Amer Fort</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Jantar Mantar</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Albert Hall Museum</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Birla Mandir</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Nahargarh Fort</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Jaigarh Fort</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Chokhi Dhani</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Sisodia Rani Palace</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Galta Ji (Monkey Temple)</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Raj Mandir Cinema</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Maharaniyon Ki Chhatriyan</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Sanganer</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Bapu Bazaar</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Johari Bazaar</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Moti Dungri Ganesh Temple</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Galtaji Temple</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Akshardham Temple</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Govind Dev Ji Temple</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Kanak Vrindavan</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Sargasuli Tower</Link>
							</li>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="item-search item-search-3">
					<label className="text-sm-bold neutral-500">Pick Up Date &amp; Time</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div>
				<div className="item-search bd-none">
					<label className="text-sm-bold neutral-500">Return Date &amp; Time</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div>
				<div className="item-search bd-none d-flex justify-content-end">
					<button className="btn btn-brand-2 text-nowrap">
						<svg className="me-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						Find a Vehicle
					</button>
				</div>
			</div>
		</>
	)
}
