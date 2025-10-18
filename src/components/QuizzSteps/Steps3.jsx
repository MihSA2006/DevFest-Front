import { GiCow } from "react-icons/gi";
import { GiPig } from "react-icons/gi";
import { GiRooster } from "react-icons/gi";
import React, { useState } from 'react'
import bgAnimale from '../../assets/bg-animal.png'
import { BiCheckCircle } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";

const Steps3 = () => {
  const [elevageType, setElevageType] = useState('')
  const [ressourceType, setRessourceType] = useState('')
  const [autreElevage, setAutreElevage] = useState('')
  const [autreRessource, setAutreRessource] = useState('')

  return (
    <div
      className='relative w-full min-h-screen overflow-hidden'
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Background Image - Bottom Right */}
      <div
        className='absolute bottom-0 right-0 opacity-20 pointer-events-none'
        style={{
          width: '600px',
          height: '600px',
          backgroundImage: `url(${bgAnimale})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          //   animation: 'floatImage 6s ease-in-out infinite'
        }}
      />

      <div className='absolute top-5 left-5'>
        <h1 className='text-2xl lg:text-2xl font-bold mb-4 leading-tight text-gray-500'>Etape 3 / 5</h1>
      </div>

      <div className='absolute top-1/3 left-10 flex flex-col gap-5 items-start'>
        <BiCheckCircle className="size-9 text-green-600" />
        <BiCheckCircle className="size-9 text-green-600" />
        <div className="flex justify-center items-center gap-2">
          <BsCircle className="size-7 text-gray-600 ml-1" />
          <span className="text-gray-400">3e Etape</span>
        </div>
        <BsCircle className="size-7 text-gray-600 ml-1" />
        <BsCircle className="size-7 text-gray-600 ml-1" />
      </div>

      <div className='relative z-10 min-h-screen flex flex-col lg:flex-row'>
        {/* Left Section - Form */}
        <div className='flex-1  lg:p-12 flex items-center justify-center' style={{ padding: '0px' }}>
          <div className='w-full max-w-2xl'>
            <div
              className='bg-white rounded-2xl shadow-2xl  lg:p-10'
              style={{
                animation: 'slideInLeft 0.8s ease-out',
                border: '1px solid rgba(75, 143, 165, 0.2)'
              }}
            >
              {/* Section 1: Type d'élevage */}
              <div className='mb-0'>
                <h3
                  className='text-2xl font-bold mb-6'
                  style={{ color: '#1D373F' }}
                >
                  Quel élevage souhaitez-vous développer ?
                </h3>

                <div className='space-y-4'>
                  {/* Aviculture */}
                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                    style={{
                      border: `${elevageType === 'aviculture' ? '2px solid #4B8FA5' : '2px solid #e2e8f0'}`,
                      backgroundColor: elevageType === 'aviculture' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (elevageType !== 'aviculture') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (elevageType !== 'aviculture') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="elevage"
                      value="aviculture"
                      checked={elevageType === 'aviculture'}
                      onChange={(e) => setElevageType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                      L'aviculture (Poulets, canards, dindes)
                    </span>
                    <GiRooster className='text-3xl transition-transform duration-300 group-hover:scale-110' style={{ color: '#4B8FA5' }} />
                  </label>

                  {/* Porcin */}
                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                    style={{
                      border: elevageType === 'porcin' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: elevageType === 'porcin' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (elevageType !== 'porcin') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (elevageType !== 'porcin') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="elevage"
                      value="porcin"
                      checked={elevageType === 'porcin'}
                      onChange={(e) => setElevageType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                      L'élevage porcin
                    </span>
                    <GiPig className='text-3xl transition-transform duration-300 group-hover:scale-110' style={{ color: '#4B8FA5' }} />
                  </label>

                  {/* Bovin */}
                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 group'
                    style={{
                      border: elevageType === 'bovin' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: elevageType === 'bovin' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (elevageType !== 'bovin') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (elevageType !== 'bovin') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="elevage"
                      value="bovin"
                      checked={elevageType === 'bovin'}
                      onChange={(e) => setElevageType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                      L'élevage bovin (Vaches laitières, bovins de boucherie)
                    </span>
                    <GiCow className='text-3xl transition-transform duration-300 group-hover:scale-110' style={{ color: '#4B8FA5' }} />
                  </label>

                  {/* Autre */}
                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                    style={{
                      border: elevageType === 'autre' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: elevageType === 'autre' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (elevageType !== 'autre') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (elevageType !== 'autre') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="elevage"
                      value="autre"
                      checked={elevageType === 'autre'}
                      onChange={(e) => setElevageType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='flex-1 font-medium' style={{ color: '#1D373F' }}>
                      Autre type d'élevage
                    </span>
                  </label>

                  {/* Champ conditionnel pour "Autre" */}
                  {elevageType === 'autre' && (
                    <div
                      className='mt-4 overflow-hidden'
                      style={{
                        animation: 'slideDown 0.4s ease-out'
                      }}
                    >
                      <label className='block text-sm font-medium mb-2' style={{ color: '#1D373F' }}>
                        Précisez le type d'élevage
                      </label>
                      <input
                        type="text"
                        value={autreElevage}
                        onChange={(e) => setAutreElevage(e.target.value)}
                        placeholder='Ex: Élevage caprin, apiculture...'
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

              {/* Section 2: Ressources */}
              <div className='pt-8 border-t-2' style={{ borderColor: 'rgba(75, 143, 165, 0.2)' }}>
                <h3
                  className='text-2xl font-bold mb-6'
                  style={{ color: '#1D373F' }}
                >
                  Quelles ressources possédez-vous ?
                </h3>

                <div className='space-y-4'>
                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                    style={{
                      border: ressourceType === 'terrain' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: ressourceType === 'terrain' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (ressourceType !== 'terrain') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (ressourceType !== 'terrain') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="ressource"
                      value="terrain"
                      checked={ressourceType === 'terrain'}
                      onChange={(e) => setRessourceType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='font-medium' style={{ color: '#1D373F' }}>
                      Un terrain adapté
                    </span>
                  </label>

                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                    style={{
                      border: ressourceType === 'logement' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: ressourceType === 'logement' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (ressourceType !== 'logement') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (ressourceType !== 'logement') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="ressource"
                      value="logement"
                      checked={ressourceType === 'logement'}
                      onChange={(e) => setRessourceType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='font-medium' style={{ color: '#1D373F' }}>
                      Un bâtiment d'élevage
                    </span>
                  </label>

                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                    style={{
                      border: ressourceType === 'systeme' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: ressourceType === 'systeme' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (ressourceType !== 'systeme') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (ressourceType !== 'systeme') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="ressource"
                      value="systeme"
                      checked={ressourceType === 'systeme'}
                      onChange={(e) => setRessourceType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='font-medium' style={{ color: '#1D373F' }}>
                      Système d'alimentation et d'abreuvement
                    </span>
                  </label>

                  <label
                    className='flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300'
                    style={{
                      border: ressourceType === 'autreRessource' ? '2px solid #4B8FA5' : '2px solid #e2e8f0',
                      backgroundColor: ressourceType === 'autreRessource' ? 'rgba(75, 143, 165, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (ressourceType !== 'autreRessource') e.currentTarget.style.borderColor = '#4B8FA5'
                    }}
                    onMouseLeave={(e) => {
                      if (ressourceType !== 'autreRessource') e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <input
                      type="radio"
                      name="ressource"
                      value="autreRessource"
                      checked={ressourceType === 'autreRessource'}
                      onChange={(e) => setRessourceType(e.target.value)}
                      className='mr-3'
                      style={{ accentColor: '#4B8FA5' }}
                    />
                    <span className='font-medium' style={{ color: '#1D373F' }}>
                      Autres ressources
                    </span>
                  </label>

                  {/* Champ conditionnel pour "Autre" */}
                  {ressourceType === 'autreRessource' && (
                    <div
                      className='mt-4 overflow-hidden'
                      style={{
                        animation: 'slideDown 0.4s ease-out'
                      }}
                    >
                      <label className='block text-sm font-medium mb-2' style={{ color: '#1D373F' }}>
                        Décrivez vos ressources
                      </label>
                      <input
                        type="text"
                        value={autreRessource}
                        onChange={(e) => setAutreRessource(e.target.value)}
                        placeholder='Ex: Équipements, capital, main d œuvre...'
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

              {/* Submit Button */}
              <a href="/step4">
                <button
                  className='w-full mt-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  style={{ backgroundColor: '#4B8FA5' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1D373F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#4B8FA5'}
                >
                  Continuer →
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Title */}
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
              Choix d'élevage
              <br />
              & ressources
            </h1>
            <p className='text-lg text-slate-600 leading-relaxed'>
              Définissez votre projet d'élevage en fonction de vos objectifs et des ressources dont vous disposez pour réussir
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps3