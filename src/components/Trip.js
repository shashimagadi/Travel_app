import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using goofle maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="A trip to Indonesia offers an incredible array of experiences across its over 17,000 islands.
           Bali is a top destination, known for its stunning beaches, vibrant nightlife, and rich cultural heritage
            with temples like Uluwatu and Tanah Lot. Java hosts the bustling capital city of Jakarta and the ancient
             Borobudur Temple, a UNESCO World Heritage site. In Sumatra, you can explore the lush rainforests and
              encounter wildlife like orangutans in Gunung Leuser National Park."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="A trip to Malaysia promises a mix of cultural experiences and natural beauty. In Kuala Lumpur, 
          you can visit iconic landmarks like the Petronas Twin Towers and explore bustling markets and diverse cuisine.
           Penang, known for its historic George Town, offers vibrant street art, colonial architecture, and delicious 
           street food"
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="A trip to France offers a delightful blend of culture, history, and natural beauty. Paris, the capital, 
          is renowned for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, and the charming streets of 
          Montmartre. The French Riviera, with destinations like Nice and Cannes, boasts stunning Mediterranean beaches 
          and glamorous events. The Loire Valley, known for its picturesque châteaux and vineyards, provides a taste of 
          the French countryside"
        />
      </div>
    </div>
  );
}

export default Trip;
