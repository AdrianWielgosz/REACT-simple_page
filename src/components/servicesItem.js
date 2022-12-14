const serviceItem = (props) => {
	let itemClasses = ["offer"];
	if (props.item.isNew) {
		itemClasses = [...itemClasses, "new"];
	}

	return (
		<div className={itemClasses.join(" ")}>
			<h3>{props.item.name}</h3>
			<span>{props.item.info}</span>
		</div>
	);
};

export default serviceItem;
