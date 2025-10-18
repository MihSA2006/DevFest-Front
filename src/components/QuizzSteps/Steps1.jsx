import { GiHandBag } from "react-icons/gi";
import { FaShip } from "react-icons/fa";
import { GiVanillaFlower } from "react-icons/gi";
import React from "react";
import secteur1 from "../../assets/secteur1.jpg";
import secteur2 from "../../assets/secteur2.jpg";
import secteur3 from "../../assets/secteur3.jpg";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Steps1 = () => {
  const navigate = useNavigate();

  const sectors = [
    {
      id: 1,
      image: secteur1,
      title: "Secteur Primaire",
      description:
        "Agriculture, pêche, exploitation forestière et extraction minière",
      icon: "🌾",
    },
    {
      id: 2,
      image: secteur2,
      title: "Secteur Secondaire",
      description: "Industrie manufacturière, construction et transformation",
      icon: "🏭",
    },
    {
      id: 3,
      image: secteur3,
      title: "Secteur Tertiaire",
      description: "Services, commerce, éducation et technologies",
      icon: "💼",
    },
  ];

  // 🧠 Fonction de sauvegarde dans le localStorage
  const handleSelect = (sector) => {
    const question = "Choix du Secteur";
    const answer = sector.title;

    // Récupérer l’ancien contenu (pour garder un historique)
    const existingData = JSON.parse(localStorage.getItem("quizAnswers")) || [];

    // Ajouter la nouvelle réponse
    const updatedData = [...existingData, { question, answer }];

    // Sauvegarder
    localStorage.setItem("quizAnswers", JSON.stringify(updatedData));

    // Aller à la prochaine étape
    navigate("/step2");
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-12 flex flex-col justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="absolute top-5 left-5">
        <h1 className="text-2xl lg:text-2xl font-bold mb-4 leading-tight text-gray-500">
          Etape 1 / 5
        </h1>
      </div>

      <div className="absolute top-1/3 left-10 flex flex-col gap-5 items-start">
        <div className="flex justify-center items-center gap-2">
          <BsCircle className="size-7 text-gray-600 ml-1" />
          <span className="text-gray-400">1e Etape</span>
        </div>
        <BsCircle className="size-7 text-gray-600 ml-1" />
        <BsCircle className="size-7 text-gray-600 ml-1" />
        <BsCircle className="size-7 text-gray-600 ml-1" />
        <BsCircle className="size-7 text-gray-600 ml-1" />
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#1D373F" }}>
            Choix du Secteur
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choisissez le secteur d'activité qui correspond à vos ambitions
            professionnelles
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
              style={{
                transform: "translateZ(0)",
                width: "450px",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(75, 143, 165, 0.2) 50%, transparent 100%)",
                  animation: "scanHorizontal 2s linear infinite",
                }}
              />

              <div className="flex h-full" style={{ width: "100%", height: "250px" }}>
                <div className="w-[50%] relative overflow-hidden">
                  <div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(29, 55, 63, 0.2) 100%)",
                      clipPath:
                        "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
                    }}
                  />
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
                    }}
                  />
                  <div
                    className="absolute top-3 left-3 text-xl bg-white/95 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    style={{ border: "2px solid #4B8FA5" }}
                  >
                    {sector.id === 1 ? (
                      <GiVanillaFlower />
                    ) : sector.id === 2 ? (
                      <FaShip />
                    ) : (
                      <GiHandBag />
                    )}
                  </div>
                </div>

                <div className="w-[50%] p-4 flex flex-col justify-center items-center gap-6">
                  <div>
                    <h3
                      className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:opacity-90"
                      style={{ color: "#1D373F" }}
                    >
                      {sector.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  {/* Bouton modifié */}
                  <button
                    className="w-full text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-xs mt-3"
                    style={{
                      backgroundColor: "#4B8FA5",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#1D373F")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#4B8FA5")
                    }
                    onClick={() => handleSelect(sector)}
                  >
                    Sélectionner →
                  </button>
                </div>
              </div>

              <div
                className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, #4B8FA5 0%, #1D373F 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanHorizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Steps1;
