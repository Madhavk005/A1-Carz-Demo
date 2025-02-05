
import Link from "next/link"
import HeroSearch from '../elements/HeroSearch'

export default function Search1() {
	return (
		<>

			<section className="box-section box-search-advance-home10 background-100">
				<div className="container">
					<div className="box-search-advance background-card wow fadeIn">
						<div className="box-top-search">
							<div className="right-top-search d-none d-md-flex">
								<Link className="text-sm-medium need-some-help" href="/contact">Need help?</Link>
							</div>
						</div>
						<HeroSearch />
					</div>
				</div>
			</section>
		</>
	)
}
