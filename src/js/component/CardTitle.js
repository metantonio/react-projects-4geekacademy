import React from "react";

const CardTitle = () => {
	return (
		<React.Fragment>
			<div className="row py-5">
				<div className="col">
					<div className="card-deck text-center">
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/500/325?random=1"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-primary">
									Go somewhere
								</button>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/500/325?random=2"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-primary">
									Go somewhere
								</button>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/500/325?random=3"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-primary">
									Go somewhere
								</button>
							</div>
						</div>
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/500/325?random=4"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-primary">
									Go somewhere
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default CardTitle;
