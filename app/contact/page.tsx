import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner4.png" alt="Carento" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Get in touch</h2>
							</div>
						</div>
					</div>
					<section className="box-section box-contact-form background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 mb-30">
									<h2 className="neutral-1000 mb-25">Get in Touch</h2>
									<div className="form-contact">
										<div className="row">
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">First Name</label>
													<input className="form-control username" type="text" placeholder="First Name" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Last Name</label>
													<input className="form-control username" type="text" placeholder="Last Name" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Email Adress</label>
													<input className="form-control email" type="email" placeholder="email@domain.com" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Phone Number</label>
													<input className="form-control phone" type="text" placeholder="Phone number" />
												</div>
											</div>

											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Your Message</label>
													<textarea className="form-control" rows={6} placeholder="Leave us a message..." />
												</div>
											</div>
											<div className="box-remember-forgot">
												<div className="form-group">
													<div className="remeber-me">
														<label className="text-sm-medium neutral-500"> <input className="cb-remember" type="checkbox" />Agree to our <Link className="text-sm-medium neutral-1000" href="/term">Terms of service </Link>and <Link className="text-sm-medium neutral-1000" href="/privacy">Privacy Policy</Link> </label>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button className="btn btn-book">
													Send message
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb-30">
									<div className="ps-lg-5">
										<h4 className="neutral-1000">Our location</h4>
										<p className="neutral-500 mb-30">A1Carz Near By Airport ICG
										College SFS Mansarovar Jaipur, 302020</p>
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.242525049332!2d75.75737737577964!3d26.83223747669515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b9f4b0453f%3A0x4df9e727b7bef05a!2sA1Carz%20Self%20Drive!5e0!3m2!1sen!2sin!4v1738768342907!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}