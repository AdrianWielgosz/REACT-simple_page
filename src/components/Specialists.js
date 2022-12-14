import specialistList from "../data/specialistList";

const Specialists = () => {
	return (
		<section className="informations" id="link">
			<div className="container">
				<div className="title">
					<h2>Nasi specjaliści</h2>
				</div>
				{specialistList.map((item, index) => {
					return (
						<div key={index} className="worker">
							<img
								className="eclipse"
								src={item.photo}
								alt="specialist"
							/>
							<div className="text">
								<h3>{item.name} </h3>
								<p>{item.info}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Specialists;
