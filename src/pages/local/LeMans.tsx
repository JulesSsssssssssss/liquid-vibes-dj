import LocalPage from "@/components/LocalPage";

const LeMans = () => {
  return (
    <LocalPage
      city="Le Mans"
      region="Sarthe"
      postalCodes={["72000", "72100"]}
      description="T.S Event, votre DJ professionnel au Mans pour animer vos événements. Mariages, soirées d'entreprise, anniversaires : une animation musicale de qualité dans toute la Sarthe."
      landmarks={[
        "Centre-ville Le Mans",
        "Circuit des 24 Heures",
        "Quartier Pontlieue",
        "Sablons",
        "Californie",
        "Allonnes",
        "Coulaines",
        "Arnage",
      ]}
    />
  );
};

export default LeMans;
