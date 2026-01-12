import LocalPage from "@/components/LocalPage";

const Angers = () => {
  return (
    <LocalPage
      city="Angers"
      region="Maine-et-Loire"
      postalCodes={["49000", "49100"]}
      description="Services de DJ professionnel à Angers. T.S Event anime vos mariages, événements d'entreprise et soirées privées avec du matériel haut de gamme et une playlist sur-mesure dans tout le Maine-et-Loire."
      landmarks={[
        "Centre-ville Angers",
        "Lac de Maine",
        "Belle-Beille",
        "Monplaisir",
        "Saint-Serge",
        "Avrillé",
        "Les Ponts-de-Cé",
        "Trélazé",
      ]}
    />
  );
};

export default Angers;
