import { GiFruiting } from "react-icons/gi";
import { GiForest } from "react-icons/gi";
import { GiFishCooked } from "react-icons/gi";
import { GiRooster } from "react-icons/gi";
import { GiHandBag } from "react-icons/gi";
import { FaShip } from "react-icons/fa";
import { GiVanillaFlower } from "react-icons/gi";
import React from 'react'
import viviere from '../../assets/viviere.png'
import industriel from '../../assets/industriel.jpg'
import elevage from '../../assets/elevage.jpg'
import aquaculture from '../../assets/aquaculture.jpg'
import sylviculture from '../../assets/sylviculture.jpg'
import { BsCircle } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";

const Steps2 = () => {
    const sectors = [
        {
            id: 1,
            image: viviere,
            title: "Agriculture Vivrière",
            description: "Production de cultures destinées à l'alimentation locale comme le manioc, le maïs ou le riz.",
            icon: "🌾"
        },
        {
            id: 2,
            image: elevage,
            title: "Élevage",
            description: "Élevage de bovins, caprins, volailles et autres animaux pour la viande, le lait ou les œufs.",
            icon: "🐄"
        },
        {
            id: 3,
            image: aquaculture,
            title: "Pêche & Aquaculture",
            description: "Exploitation des ressources aquatiques : pêche en mer, en rivières ou élevage de poissons.",
            icon: "🐟"
        },
        {
            id: 4,
            image: sylviculture,
            title: "Sylviculture",
            description: "Gestion et exploitation des forêts pour le bois, les fruits sauvages ou la conservation.",
            icon: "🌲"
        },
        {
            id: 5,
            image: industriel,
            title: "Autres Activités Primaires",
            description: "Inclut des activités comme l’extraction artisanale ou la cueillette traditionnelle.",
            icon: "⛏️"
        }
    ]

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-12 flex flex-col justify-center items-center" style={{ height: '100vh', width: '100vw' }}>

            <div className='absolute top-5 left-5'>
                <h1 className='text-2xl lg:text-2xl font-bold mb-4 leading-tight text-gray-500'>Etape 2 / 5</h1>
            </div>

            <div className='absolute top-1/3 left-10 flex flex-col gap-5 items-start'>
                <BiCheckCircle className="size-9 text-green-600" />
                <div className="flex justify-center items-center gap-2">
                    <BsCircle className="size-7 text-gray-600 ml-1" />
                    <span className="text-gray-400">2e Etape</span>
                </div>
                <BsCircle className="size-7 text-gray-600 ml-1" />
                <BsCircle className="size-7 text-gray-600 ml-1" />
                <BsCircle className="size-7 text-gray-600 ml-1" />
            </div>

            <div className="max-w-8xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-3" style={{ color: '#1D373F' }}>
                        Choix du Secteur
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choisissez le secteur d'activité qui correspond à vos ambitions professionnelles
                    </p>
                </div>

                {/* Cards Container - Horizontal Layout */}
                <div className="flex flex-wrap items-center justify-center gap-9">
                    {sectors.map((sector) => (
                        <div
                            key={sector.id}
                            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                            style={{
                                transform: 'translateZ(0)',
                                width: '450px'
                            }}
                        >
                            {/* Scan Animation Overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(75, 143, 165, 0.2) 50%, transparent 100%)',
                                    animation: 'scanHorizontal 2s linear infinite',
                                }}
                            />

                            <div className="flex h-full" style={{ width: '100%', height: '250px' }}>
                                {/* Image Section - 40% Left */}


                                {/* Content Section - 60% Right */}
                                <div className="w-[50%] p-4 flex flex-col justify-center items-center gap-6">
                                    <div>
                                        <h3
                                            className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:opacity-90"
                                            style={{ color: '#1D373F' }}
                                        >
                                            {sector.title}
                                        </h3>

                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {sector.description}
                                        </p>
                                    </div>

                                    <a href="/step3">
                                        <button
                                            className="w-full text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-xs mt-3"
                                            style={{
                                                backgroundColor: '#4B8FA5',
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                                        >
                                            Sélectionner →
                                        </button>
                                    </a>
                                </div>

                                <div className="w-[50%] relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
                                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(29, 55, 63, 0.2) 100%)', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)' }}
                                    />
                                    <img
                                        src={sector.image}
                                        alt={sector.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)' }}
                                    />
                                    <div
                                        className="absolute top-3 right-3 text-xl bg-white/95 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                                        style={{ border: '2px solid #4B8FA5' }}
                                    >
                                        {
                                            sector.id === 1 ? <GiVanillaFlower /> : sector.id === 2 ? <GiRooster /> : sector.id === 3 ? <GiFishCooked /> : sector.id === 4 ? <GiForest /> : <GiFruiting />
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Bottom border accent */}
                            <div
                                className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ background: 'linear-gradient(90deg, #4B8FA5 0%, #1D373F 100%)' }}
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
    )
}

export default Steps2