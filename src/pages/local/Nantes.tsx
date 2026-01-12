import LocalPage from "@/components/LocalPage";

const Nantes = () => {
  return (
    <LocalPage
      city="Nantes"
      region="Loire-Atlantique"
      postalCodes={["44000", "44100", "44200", "44300"]}
      description="T.S Event, votre DJ professionnel à Nantes pour tous vos événements : mariages, soirées d'entreprise, anniversaires et plus encore. Animation musicale de qualité dans toute l'agglomération nantaise."
      landmarks={[
        "Centre-ville de Nantes",
        "Île de Nantes",
        "Erdre",
        "Quartier Bouffay",
        "Beaulieu",
        "Chantenay",
        "Doulon",
        "Bottière",
        "Saint-Donatien",
        "Procé",
        "Hauts-Pavés",
        "Malakoff",
      ]}
    />
  );
};

export default Nantes;
