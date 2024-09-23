import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <DestinationData
        className="first-des"
        heading="Taal Volcano Batangas"
        text='"Valcanon" appears to be a typographical error or misspelling, as
              there is no widely recognized term or concept by that name. If you
              intended to refer to something specific, such as "volcano" or
              "Vulcan," please clarify. Here are brief explanations for those
              terms:'
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des"
        heading="Indian Beaches  "
        text="India is a diverse and culturally rich country located in South Asia,
         known for its vast landscapes ranging from the Himalayan mountains to coastal beaches.
          It has a rich history with ancient civilizations like the Indus Valley and iconic heritage 
          sites such as the Taj Mahal. India is renowned for its vibrant festivals, varied cuisines,
           and multiple languages, reflecting its cultural diversity. It is the world's largest democracy
            and has a rapidly growing economy, playing a significant role in global affairs. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
