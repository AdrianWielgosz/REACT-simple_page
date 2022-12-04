import specialist1 from "../photo/kot2.jpg";
import specialist2 from "../photo/kot1.jpg";

const Specialists = () => {
  const specialistList = [
    {
      name: "Milka [Marketing]",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      photo: specialist1,
    },
    {
      name: "Plamka [HR]",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
      photo: specialist2,
    },
  ];
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