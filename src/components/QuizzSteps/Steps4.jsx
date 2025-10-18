import { GiCow } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiRooster } from "react-icons/gi";
import React, { useState } from 'react'
import bgAnimale from '../../assets/bg-animal.png'
import { BiCheckCircle } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Steps4 = () => {
    const [objectifType, setObjectifType] = useState('')
    const [budgetType, setBudgetType] = useState('')
    const [nombreType, setNombreType] = useState('')
    const [autreObjectif, setAutreObjectif] = useState('')
    const [autreBudget, setAutreBudget] = useState('')

    const navigate = useNavigate(); // ✅ hook pour la redirection

    // ✅ Fonction appelée au clic sur "Continuer"
    const handleContinue = () => {
        const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];

        // Récupère les réponses actuelles
        const objectifTypeAnswer = objectifType === 'autre' ? autreObjectif || 'Autre (non précisé)' : objectifType;
        const nombreTypeAnswer = nombreType
        const budgetTypeAnswer = budgetType === 'autre' ? autreBudget || 'Autre (non précisé)' : budgetType;

        // ✅ Ajoute les nouvelles questions/réponses
        const newAnswers = [
            ...quizAnswers,
            { question: "Quel est votre objectif principal ?", answer: objectifTypeAnswer },
            { question: "Quel est votre budget initial ?", answer: budgetTypeAnswer },
            { question: "Nombre d'animaux souhaité ?", answer: nombreTypeAnswer },
        ];

        // ✅ Sauvegarde dans le localStorage
        localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));


        navigate('/step5');
    };

    return (
        <div
            className='relative w-full h-screen overflow-hidden'
            style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}
        >
            {/* Background Image - Fixed */}
            <div
                className='absolute bottom-0 right-0 opacity-20 pointer-events-none'
                style={{
                    width: '600px',
                    height: '600px',
                    backgroundImage: `url(${bgAnimale})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                }}
            />

            <div className='absolute top-5 left-5'>
                <h1 className='text-2xl lg:text-2xl font-bold mb-4 leading-tight text-gray-500'>Etape 4 / 5</h1>
            </div>

            <div className='absolute top-1/3 left-10 flex flex-col gap-5 items-start'>
                <BiCheckCircle className="size-9 text-green-600" />
                <BiCheckCircle className="size-9 text-green-600" />
                <BiCheckCircle className="size-9 text-green-600" />
                <div className="flex justify-center items-center gap-2">
                    <BsCircle className="size-7 text-gray-600 ml-1" />
                    <span className="text-gray-400">4e Etape</span>
                </div>
                <BsCircle className="size-7 text-gray-600 ml-1" />
            </div>

            <div className='relative z-10 h-full flex flex-col lg:flex-row'>
                {/* Left Section - Form with Scroll */}
                <div className='flex-1 flex items-center justify-center p-4 lg:p-8'>
                    <div className='w-full max-w-2xl h-full flex items-center'>
                        <div
                            className='bg-white rounded-2xl shadow-2xl w-full overflow-hidden'
                            style={{
                                animation: 'slideInLeft 0.8s ease-out',
                                border: '1px solid rgba(75, 143, 165, 0.2)',
                                maxHeight: '85vh'
                            }}
                        >
                            {/* Scrollable Content */}
                            <div className='overflow-y-auto p-6 lg:p-10' style={{ maxHeight: '85vh' }}>
                                {/* Section 1: Objectif */}
                                <div className='mb-8'>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Quel est votre objectif principal ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                                            style={{
                                                border: objectifType === 'petit' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: objectifType === 'petit' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (objectifType !== 'petit') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (objectifType !== 'petit') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="objectif"
                                                value="petit"
                                                checked={objectifType === 'petit'}
                                                onChange={(e) => setObjectifType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Créer un petit élevage familial
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                                            style={{
                                                border: objectifType === 'rentable' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: objectifType === 'rentable' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (objectifType !== 'rentable') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (objectifType !== 'rentable') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="objectif"
                                                value="rentable"
                                                checked={objectifType === 'rentable'}
                                                onChange={(e) => setObjectifType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Développer un élevage rentable
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: objectifType === 'autre' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: objectifType === 'autre' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (objectifType !== 'autre') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (objectifType !== 'autre') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="objectif"
                                                value="autre"
                                                checked={objectifType === 'autre'}
                                                onChange={(e) => setObjectifType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Autre objectif
                                            </span>
                                        </label>

                                        {objectifType === 'autre' && (
                                            <div
                                                className='mt-4 overflow-hidden'
                                                style={{
                                                    animation: 'slideDown 0.4s ease-out'
                                                }}
                                            >
                                                <label className='block text-sm font-medium mb-2' style={{ color: '#1D373F' }}>
                                                    Précisez votre objectif
                                                </label>
                                                <input
                                                    type="text"
                                                    value={autreObjectif}
                                                    onChange={(e) => setAutreObjectif(e.target.value)}
                                                    placeholder='Entrez votre objectif ici...'
                                                    className='w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300'
                                                    style={{
                                                        border: '2px solid #4B8FA5',
                                                        backgroundColor: 'rgba(75, 143, 165, 0.05)'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Section 2: Budget */}
                                <div className='mb-8 pt-8 border-t-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Quel est votre budget initial ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetType === 'petit' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetType === 'petit' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetType !== 'petit') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetType !== 'petit') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budget"
                                                value="petit"
                                                checked={budgetType === 'petit'}
                                                onChange={(e) => setBudgetType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Moins de 500 000 Ariary
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetType === 'moyen' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetType === 'moyen' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetType !== 'moyen') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetType !== 'moyen') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budget"
                                                value="moyen"
                                                checked={budgetType === 'moyen'}
                                                onChange={(e) => setBudgetType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                500 000 à 1 000 000 Ariary
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetType === 'grand' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetType === 'grand' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetType !== 'grand') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetType !== 'grand') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budget"
                                                value="grand"
                                                checked={budgetType === 'grand'}
                                                onChange={(e) => setBudgetType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                1 000 000 à 2 000 000 Ariary
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetType === 'autre' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetType === 'autre' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetType !== 'autre') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetType !== 'autre') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budget"
                                                value="autre"
                                                checked={budgetType === 'autre'}
                                                onChange={(e) => setBudgetType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Autre montant
                                            </span>
                                        </label>

                                        {budgetType === 'autre' && (
                                            <div
                                                className='mt-4 overflow-hidden'
                                                style={{
                                                    animation: 'slideDown 0.4s ease-out'
                                                }}
                                            >
                                                <label className='block text-sm font-medium mb-2' style={{ color: '#1D373F' }}>
                                                    Précisez votre budget
                                                </label>
                                                <input
                                                    type="text"
                                                    value={autreBudget}
                                                    onChange={(e) => setAutreBudget(e.target.value)}
                                                    placeholder='Ex: Plus de 2 000 000 Ariary...'
                                                    className='w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300'
                                                    style={{
                                                        border: '2px solid #4B8FA5',
                                                        backgroundColor: 'rgba(75, 143, 165, 0.05)'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Section 3: Nombre */}
                                <div className='mb-8 pt-8 border-t-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Nombre d'animaux souhaité ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: nombreType === 'petit' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: nombreType === 'petit' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (nombreType !== 'petit') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (nombreType !== 'petit') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="nombre"
                                                value="petit"
                                                checked={nombreType === 'petit'}
                                                onChange={(e) => setNombreType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='font-medium' style={{ color: '#1D373F' }}>
                                                1 à 5 animaux
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: nombreType === 'moyen' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: nombreType === 'moyen' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (nombreType !== 'moyen') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (nombreType !== 'moyen') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="nombre"
                                                value="moyen"
                                                checked={nombreType === 'moyen'}
                                                onChange={(e) => setNombreType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='font-medium' style={{ color: '#1D373F' }}>
                                                5 à 20 animaux
                                            </span>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: nombreType === 'budget' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: nombreType === 'budget' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (nombreType !== 'budget') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (nombreType !== 'budget') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="nombre"
                                                value="budget"
                                                checked={nombreType === 'budget'}
                                                onChange={(e) => setNombreType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='font-medium' style={{ color: '#1D373F' }}>
                                                Selon mon budget disponible
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    onClick={handleContinue}
                                    className='w-full mt-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                    style={{ backgroundColor: '#4B8FA5' }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                                >
                                    Continuer →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Title (Fixed) */}
                <div className='lg:w-96 p-8 lg:p-12 flex items-start justify-end'>
                    <div
                        className='text-right'
                        style={{
                            animation: 'slideInRight 0.8s ease-out'
                        }}
                    >
                        <h1
                            className='text-4xl lg:text-5xl font-bold mb-4 leading-tight'
                            style={{ color: '#1D373F' }}
                        >
                            Objectif
                            <br />
                            & capitale
                        </h1>
                        <p className='text-lg text-slate-600 leading-relaxed'>
                            Définissez votre projet d'élevage en fonction de vos objectifs et des ressources dont vous disposez pour réussir
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`


                /* Custom scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: rgba(75, 143, 165, 0.1);
                    border-radius: 10px;
                }

                ::-webkit-scrollbar-thumb {
                    background: #4B8FA5;
                    border-radius: 10px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #1D373F;
                }
            `}</style>
        </div>
    )
}

export default Steps4