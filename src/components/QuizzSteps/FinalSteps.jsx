
import React, { useState, useEffect } from 'react'
import bgAnimale from '../../assets/bg-animal.png'
import { BiCheckCircle, BiEdit } from "react-icons/bi"

const FinalSteps = () => {
    const [quizData, setQuizData] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)
    const [editValue, setEditValue] = useState('')

    useEffect(() => {
        // Récupérer les données du localStorage
        const storedData = localStorage.getItem('quizAnswers')
        if (storedData) {
            setQuizData(JSON.parse(storedData))
        }
    }, [])

    const handleEdit = (index, currentValue) => {
        setEditingIndex(index)
        setEditValue(currentValue)
    }

    const handleSave = (index) => {
        const updatedData = [...quizData]
        updatedData[index].answer = editValue
        setQuizData(updatedData)
        localStorage.setItem('quizAnswers', JSON.stringify(updatedData))
        setEditingIndex(null)
    }

    const handleCancel = () => {
        setEditingIndex(null)
        setEditValue('')
    }

    const handleConfirm = () => {
        // Action de confirmation
        console.log("Projet confirmé:", quizData)
        alert("Projet confirmé avec succès !")
        // Vous pouvez ajouter la navigation ici avec votre router
    }

    // Grouper les données par catégorie
    const categorizedData = {
        secteur: quizData.slice(0, 2),
        elevage: quizData.slice(2, 4),
        budget: quizData.slice(4, 7),
        strategie: quizData.slice(7, 10)
    }

    const getCategoryIcon = (category) => {
        switch(category) {
            case 'secteur': return '🎯'
            case 'elevage': return '🐮'
            case 'budget': return '💰'
            case 'strategie': return '📈'
            default: return '✓'
        }
    }

    const getCategoryTitle = (category) => {
        switch(category) {
            case 'secteur': return 'Secteur d\'activité'
            case 'elevage': return 'Type d\'élevage'
            case 'budget': return 'Budget & Capacité'
            case 'strategie': return 'Stratégie & Vision'
            default: return 'Informations'
        }
    }

    const getCategoryColor = (category) => {
        switch(category) {
            case 'secteur': return '#4B8FA5'
            case 'elevage': return '#5fa55f'
            case 'budget': return '#a58f4b'
            case 'strategie': return '#8f4ba5'
            default: return '#4B8FA5'
        }
    }

    return (
        <div
            className='relative w-full min-h-screen overflow-hidden'
            style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}
        >
            {/* Background Image */}
            <div
                className='absolute bottom-0 right-0 opacity-10 pointer-events-none'
                style={{
                    width: '600px',
                    height: '600px',
                    backgroundImage: `url(${bgAnimale})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    animation: 'floatImage 6s ease-in-out infinite'
                }}
            />

            {/* Progress Indicators */}
            <div className='absolute top-8 left-8 flex items-center gap-3'>
                <h2 className='text-2xl font-bold mr-4' style={{ color: '#1D373F' }}>
                    Finalisation
                </h2>
                <div className='flex gap-2'>
                    {[1, 2, 3, 4, 5].map((step) => (
                        <BiCheckCircle key={step} className="text-3xl" style={{ color: '#4B8FA5' }} />
                    ))}
                </div>
            </div>

            <div className='relative z-10 min-h-screen flex flex-col lg:flex-row pt-24 pb-12'>
                {/* Left Section - Content */}
                <div className='flex-1 px-8 lg:px-16 flex items-start justify-center overflow-y-auto'>
                    <div className='w-full max-w-4xl'>
                        <div 
                            className='mb-10'
                            style={{
                                animation: 'fadeIn 0.8s ease-out'
                            }}
                        >
                            <h3 className='text-3xl font-bold mb-3' style={{ color: '#1D373F' }}>
                                Récapitulatif de votre projet
                            </h3>
                            <p className='text-lg text-slate-600'>
                                Vérifiez et modifiez vos informations avant de confirmer
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                            {Object.entries(categorizedData).map(([category, items]) => (
                                <div
                                    key={category}
                                    className='bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl'
                                    style={{
                                        animation: 'slideUp 0.6s ease-out',
                                        border: '1px solid rgba(75, 143, 165, 0.2)'
                                    }}
                                >
                                    {/* Category Header */}
                                    <div className='flex items-center gap-3 mb-5 pb-3 border-b-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                                        <div 
                                            className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl'
                                            style={{ 
                                                backgroundColor: `${getCategoryColor(category)}20`,
                                                border: `2px solid ${getCategoryColor(category)}`
                                            }}
                                        >
                                            {getCategoryIcon(category)}
                                        </div>
                                        <h4 className='text-xl font-bold' style={{ color: getCategoryColor(category) }}>
                                            {getCategoryTitle(category)}
                                        </h4>
                                    </div>

                                    {/* Items */}
                                    <div className='space-y-4'>
                                        {items.map((item, index) => {
                                            const actualIndex = Object.keys(categorizedData)
                                                .slice(0, Object.keys(categorizedData).indexOf(category))
                                                .reduce((sum, cat) => sum + categorizedData[cat].length, 0) + index

                                            return (
                                                <div key={actualIndex} className='group'>
                                                    <div className='flex items-start justify-between gap-3'>
                                                        <div className='flex-1'>
                                                            <p className='text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide'>
                                                                {item.question}
                                                            </p>
                                                            {editingIndex === actualIndex ? (
                                                                <div className='flex gap-2 mt-2'>
                                                                    <input
                                                                        type="text"
                                                                        value={editValue}
                                                                        onChange={(e) => setEditValue(e.target.value)}
                                                                        className='flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none'
                                                                        style={{
                                                                            border: '2px solid #4B8FA5',
                                                                            backgroundColor: 'rgba(75, 143, 165, 0.05)'
                                                                        }}
                                                                        autoFocus
                                                                    />
                                                                    <button
                                                                        onClick={() => handleSave(actualIndex)}
                                                                        className='px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all'
                                                                        style={{ backgroundColor: '#4B8FA5' }}
                                                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                                                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                                                                    >
                                                                        ✓
                                                                    </button>
                                                                    <button
                                                                        onClick={handleCancel}
                                                                        className='px-4 py-2 rounded-lg bg-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-300 transition-all'
                                                                    >
                                                                        ✗
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <p className='text-base font-bold' style={{ color: '#1D373F' }}>
                                                                    {item.answer}
                                                                </p>
                                                            )}
                                                        </div>
                                                        {editingIndex !== actualIndex && (
                                                            <button
                                                                onClick={() => handleEdit(actualIndex, item.answer)}
                                                                className='opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-slate-100'
                                                                title='Modifier'
                                                            >
                                                                <BiEdit className='text-xl' style={{ color: '#4B8FA5' }} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className='flex gap-4 mt-8'>
                            <button
                                onClick={() => window.history.back()}
                                className='flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                                style={{
                                    backgroundColor: 'white',
                                    color: '#4B8FA5',
                                    border: '2px solid #4B8FA5'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#4B8FA5'
                                    e.target.style.color = 'white'
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'white'
                                    e.target.style.color = '#4B8FA5'
                                }}
                            >
                                ← Retour
                            </button>
                            <button
                                onClick={handleConfirm}
                                className='flex-1 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                style={{ backgroundColor: '#4B8FA5' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                            >
                                Confirmer mon projet ✓
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - Summary */}
                <div className='lg:w-96 p-8 lg:p-12 flex items-start justify-end'>
                    <div
                        className='text-right bg-white rounded-2xl p-8 shadow-xl'
                        style={{
                            animation: 'slideInRight 0.8s ease-out',
                            border: '1px solid rgba(75, 143, 165, 0.2)'
                        }}
                    >
                        <div className='mb-6'>
                            <div 
                                className='w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl'
                                style={{ 
                                    backgroundColor: 'rgba(75, 143, 165, 0.1)',
                                    border: '3px solid #4B8FA5'
                                }}
                            >
                                ✓
                            </div>
                            <h1
                                className='text-3xl lg:text-4xl font-bold mb-3 leading-tight'
                                style={{ color: '#1D373F' }}
                            >
                                Votre projet
                                <br />
                                est prêt !
                            </h1>
                        </div>

                        <div className='space-y-4 text-left'>
                            <div className='p-4 rounded-xl' style={{ backgroundColor: 'rgba(75, 143, 165, 0.05)' }}>
                                <p className='text-sm font-semibold mb-1' style={{ color: '#4B8FA5' }}>
                                    Budget
                                </p>
                                <p className='font-bold' style={{ color: '#1D373F' }}>
                                    {quizData[5]?.answer || 'Non défini'}
                                </p>
                            </div>
                        </div>

                        <div className='mt-6 pt-6 border-t' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                            <p className='text-sm text-slate-600 leading-relaxed'>
                                Vérifiez vos informations et confirmez pour recevoir vos recommandations personnalisées
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes floatImage {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    )
}

export default FinalSteps