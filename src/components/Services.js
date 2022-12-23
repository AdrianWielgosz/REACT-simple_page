import servicesList from "../data/servicesList";
import ServicesItem from "./ServicesItem";

const Services = () => {
	return (
		<section className="services" id="link2">
			<div className="container">
				<div className="market">
					<h2>Czym zajmuje się nasza firma?</h2>
				</div>
				<div className="market-box">
					{servicesList.map((item, index) => {
						return <ServicesItem item={item} key={index} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
