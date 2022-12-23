const ServicesItem = (props) => {
	let itemClasses = ["offer"];
	if (props.item.isNew) {
		itemClasses = [...itemClasses, "new"];
	}

	return (
		<div className={itemClasses.join(" ")}>
			<h3>{props.item.name}</h3>
			{props.item.isNew && <span>NOWOŚĆ</span>}
		</div>
	);
};

export default ServicesItem;
