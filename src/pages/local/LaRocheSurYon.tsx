import LocalPage from "@/components/LocalPage";

const LaRocheSurYon = () => {
  return (
    <LocalPage
      city="La Roche-sur-Yon"
      region="Vendée"
      postalCodes={["85000"]}
      description="Animation DJ professionnelle à La Roche-sur-Yon et en Vendée. T.S Event vous accompagne pour tous vos événements : mariages, soirées d'entreprise, anniversaires avec un service personnalisé."
      landmarks={[
        "Centre-ville La Roche-sur-Yon",
        "Quartier Napoléon",
        "Les Oudairies",
        "Forges",
        "La Vallée Verte",
        "Bourg-sous-La Roche",
      ]}
    />
  );
};

export default LaRocheSurYon;
