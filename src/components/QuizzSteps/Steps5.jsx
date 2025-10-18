import { BsCircle } from "react-icons/bs"; 
import { BiCheckCircle } from "react-icons/bi"; 
import React, { useState } from 'react'
import bgAnimale from '../../assets/bg-animal.png'

const Steps5 = () => {
    const [ecoulementType, setEcoulementType] = useState('')
    const [budgetImprevuType, setBudgetImprevuType] = useState('')
    const [agrandirType, setAgrandirType] = useState('')

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
                <h1 className='text-2xl lg:text-2xl font-bold mb-4 leading-tight text-gray-500'>Etape 5 / 5</h1>
            </div>

            <div className='absolute top-1/3 left-10 flex flex-col gap-5 items-start'>
                <BiCheckCircle className="size-9 text-green-600"/>
                <BiCheckCircle className="size-9 text-green-600"/>
                <BiCheckCircle className="size-9 text-green-600"/>
                <BiCheckCircle className="size-9 text-green-600"/>
                <div className="flex justify-center items-center gap-2">
                    <BsCircle className="size-7 text-gray-600 ml-1"/>
                    <span className="text-gray-400">5e Etape</span>
                </div>
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
                                {/* Section 1: Écoulement de la production */}
                                <div className='mb-8'>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Avez-vous prévu comment écouler votre production ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                                            style={{
                                                border: ecoulementType === 'oui' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: ecoulementType === 'oui' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (ecoulementType !== 'oui') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (ecoulementType !== 'oui') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="ecoulement"
                                                value="oui"
                                                checked={ecoulementType === 'oui'}
                                                onChange={(e) => setEcoulementType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Oui, j'ai des clients potentiels
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>✓</span>
                                            </div>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                                            style={{
                                                border: ecoulementType === 'non' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: ecoulementType === 'non' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (ecoulementType !== 'non') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (ecoulementType !== 'non') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="ecoulement"
                                                value="non"
                                                checked={ecoulementType === 'non'}
                                                onChange={(e) => setEcoulementType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Non, pas encore
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>✗</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Section 2: Budget pour imprévus */}
                                <div className='mb-8 pt-8 border-t-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Avez-vous prévu un budget pour les imprévus ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetImprevuType === 'oui' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetImprevuType === 'oui' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetImprevuType !== 'oui') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetImprevuType !== 'oui') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budgetImprevu"
                                                value="oui"
                                                checked={budgetImprevuType === 'oui'}
                                                onChange={(e) => setBudgetImprevuType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Oui, j'ai prévu une réserve financière
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>✓</span>
                                            </div>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: budgetImprevuType === 'non' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: budgetImprevuType === 'non' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (budgetImprevuType !== 'non') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (budgetImprevuType !== 'non') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="budgetImprevu"
                                                value="non"
                                                checked={budgetImprevuType === 'non'}
                                                onChange={(e) => setBudgetImprevuType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Non, pas encore prévu
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>✗</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Section 3: Agrandissement */}
                                <div className='mb-8 pt-8 border-t-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                                    <h3
                                        className='text-2xl font-bold mb-6'
                                        style={{ color: '#1D373F' }}
                                    >
                                        Comptez-vous agrandir votre élevage à l'avenir ?
                                    </h3>
                                    <div className='space-y-4'>
                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: agrandirType === 'oui' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: agrandirType === 'oui' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (agrandirType !== 'oui') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (agrandirType !== 'oui') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="agrandir"
                                                value="oui"
                                                checked={agrandirType === 'oui'}
                                                onChange={(e) => setAgrandirType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Oui, c'est dans mes plans
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>↑</span>
                                            </div>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: agrandirType === 'non' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: agrandirType === 'non' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (agrandirType !== 'non') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (agrandirType !== 'non') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="agrandir"
                                                value="non"
                                                checked={agrandirType === 'non'}
                                                onChange={(e) => setAgrandirType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Non, je préfère rester stable
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>→</span>
                                            </div>
                                        </label>

                                        <label
                                            className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                                            style={{
                                                border: agrandirType === 'nesaispas' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                                                backgroundColor: agrandirType === 'nesaispas' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (agrandirType !== 'nesaispas') e.currentTarget.style.borderColor = '#4B8FA5'
                                            }}
                                            onMouseLeave={(e) => {
                                                if (agrandirType !== 'nesaispas') e.currentTarget.style.borderColor = '#e2e8f0'
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="agrandir"
                                                value="nesaispas"
                                                checked={agrandirType === 'nesaispas'}
                                                onChange={(e) => setAgrandirType(e.target.value)}
                                                className='mr-3'
                                                style={{ accentColor: '#4B8FA5' }}
                                            />
                                            <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                                                Je ne sais pas encore
                                            </span>
                                            <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: 'rgba(75, 143, 165, 0.2)' }}>
                                                <span style={{ color: '#4B8FA5' }}>?</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    className='w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                    style={{ backgroundColor: '#4B8FA5' }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                                >
                                    Voir mes recommandations →
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
                            Stratégie
                            <br />
                            & Vision
                        </h1>
                        <p className='text-lg text-slate-600 leading-relaxed'>
                            Anticipez l'avenir de votre élevage avec une planification stratégique adaptée à vos ambitions
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

export default Steps5