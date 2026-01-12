import LocalPage from "@/components/LocalPage";

const Laval = () => {
  return (
    <LocalPage
      city="Laval"
      region="Mayenne"
      postalCodes={["53000"]}
      description="Animation DJ à Laval et dans toute la Mayenne. T.S Event vous propose ses services pour tous vos événements : mariages, soirées privées, événements professionnels avec du matériel premium."
      landmarks={[
        "Centre-ville Laval",
        "Quartier Saint-Nicolas",
        "Hilard",
        "Ferrié",
        "Avesnières",
        "Changé",
        "Bonchamp-lès-Laval",
      ]}
    />
  );
};

export default Laval;
