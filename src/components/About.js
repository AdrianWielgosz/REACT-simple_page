import forest from "../photo/forest.jpg"

const About = () => {
	return (
        <header className="header-baner" style={{ backgroundImage: `url(${forest})` }}>
			<div className="container">
				<div className="header-box">
					<h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
					<p>Nie wierz nam na słowo - sprawdź</p>
					<a href="#link2">Oferta</a>
				</div>
			</div>
        </header>
	);
};

export default About;
