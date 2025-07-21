'use client';

import { useState } from 'react';

export default function ProfessionalHelp() {
  const [selectedType, setSelectedType] = useState('therapist');

  const professionalTypes = [
    { id: 'therapist', label: 'Therapists & Counselors' },
    { id: 'psychiatrist', label: 'Psychiatrists' },
    { id: 'online', label: 'Online Therapy' },
    { id: 'support', label: 'Support Groups' },
  ];

  const therapyTypes = [
    {
      title: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Focuses on identifying and changing negative thought patterns and behaviors',
      bestFor: 'Anxiety, depression, phobias, PTSD',
      duration: '12-20 sessions',
      approach: 'Structured, goal-oriented'
    },
    {
      title: 'Dialectical Behavior Therapy (DBT)',
      description: 'Teaches skills for managing emotions and improving relationships',
      bestFor: 'Borderline personality disorder, emotional regulation',
      duration: '6 months - 1 year',
      approach: 'Skills-based, group and individual'
    },
    {
      title: 'Psychodynamic Therapy',
      description: 'Explores unconscious thoughts and past experiences',
      bestFor: 'Depression, relationship issues, personality disorders',
      duration: 'Long-term (1+ years)',
      approach: 'Insight-oriented, open-ended'
    },
    {
      title: 'Humanistic/Person-Centered Therapy',
      description: 'Focuses on personal growth and self-acceptance',
      bestFor: 'Self-esteem issues, life transitions, personal growth',
      duration: 'Variable',
      approach: 'Client-led, supportive'
    },
  ];

  const onlineServices = [
    {
      name: 'BetterHelp',
      description: 'Large network of licensed therapists with flexible scheduling',
      pricing: '$60-90/week',
      features: ['Video, phone, messaging', 'Weekly live sessions', 'Change therapists anytime'],
      rating: 4.5
    },
    {
      name: 'Talkspace',
      description: 'Text-based therapy with video options',
      pricing: '$69-109/week',
      features: ['Unlimited messaging', 'Video sessions', 'Psychiatry services'],
      rating: 4.3
    },
    {
      name: 'Cerebral',
      description: 'Therapy and medication management combined',
      pricing: '$85-325/month',
      features: ['Therapy sessions', 'Medication management', 'Care team approach'],
      rating: 4.2
    },
    {
      name: 'MDLIVE',
      description: 'On-demand therapy and psychiatry services',
      pricing: '$108-284/session',
      features: ['Same-day appointments', 'Insurance accepted', 'Urgent care'],
      rating: 4.4
    },
  ];

  const supportGroups = [
    {
      name: 'National Alliance on Mental Illness (NAMI)',
      type: 'In-person & Online',
      description: 'Support groups for individuals and families affected by mental illness',
      cost: 'Free',
      website: 'nami.org'
    },
    {
      name: 'Depression and Bipolar Support Alliance (DBSA)',
      type: 'In-person & Online',
      description: 'Peer support groups for depression and bipolar disorder',
      cost: 'Free',
      website: 'dbsalliance.org'
    },
    {
      name: 'Anxiety and Depression Association of America (ADAA)',
      type: 'Online',
      description: 'Online support groups and forums for anxiety and depression',
      cost: 'Free',
      website: 'adaa.org'
    },
    {
      name: 'Mental Health America (MHA)',
      type: 'In-person & Online',
      description: 'Local support groups and online communities',
      cost: 'Free',
      website: 'mhanational.org'
    },
  ];

  const findingTips = [
    {
      icon: 'ri-search-line',
      title: 'Research credentials',
      description: 'Look for licensed professionals with relevant specializations'
    },
    {
      icon: 'ri-heart-line',
      title: 'Consider specializations',
      description: 'Find therapists who specialize in your specific concerns'
    },
    {
      icon: 'ri-money-dollar-line',
      title: 'Check insurance coverage',
      description: 'Verify if the provider accepts your insurance plan'
    },
    {
      icon: 'ri-calendar-line',
      title: 'Schedule a consultation',
      description: 'Many therapists offer brief consultations to discuss fit'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Consider location and format',
      description: 'Decide between in-person, online, or hybrid therapy'
    },
    {
      icon: 'ri-time-line',
      title: 'Trust the process',
      description: 'It may take a few sessions to determine if it\'s a good fit'
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Professional Help</h2>
        <p className="text-gray-600 mb-6">
          Find qualified mental health professionals and treatment options
        </p>
        
        <div className="flex flex-wrap gap-2">
          {professionalTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {selectedType === 'therapist' && (
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Types of Therapy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {therapyTypes.map((therapy, index) => (
                <div key={index} className="bg-white rounded-xl border border-blue-100 p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{therapy.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{therapy.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Best for:</span>
                      <span className="text-gray-600">{therapy.bestFor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="text-gray-600">{therapy.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Approach:</span>
                      <span className="text-gray-600">{therapy.approach}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tips for Finding a Therapist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {findingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl border border-blue-100 p-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className={`${tip.icon} text-blue-600 text-lg`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedType === 'psychiatrist' && (
        <div>
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">When to See a Psychiatrist</h3>
            <p className="text-blue-700 mb-4">
              Psychiatrists are medical doctors who can prescribe medication and provide therapy. Consider seeing one if:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 mt-1"></i>
                <span>You may benefit from medication for mental health conditions</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 mt-1"></i>
                <span>Your symptoms are severe or significantly impacting daily life</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 mt-1"></i>
                <span>You have complex mental health conditions</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 mt-1"></i>
                <span>Therapy alone hasn't provided sufficient improvement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-blue-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Finding a Psychiatrist</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-user-heart-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Get a referral</h4>
                  <p className="text-gray-600">Ask your primary care doctor or therapist for recommendations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-shield-check-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Check insurance</h4>
                  <p className="text-gray-600">Verify the psychiatrist accepts your insurance plan</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-calendar-check-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Consider availability</h4>
                  <p className="text-gray-600">Psychiatrists often have longer wait times for appointments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedType === 'online' && (
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Online Therapy Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onlineServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl border border-blue-100 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">{service.name}</h4>
                    <div className="flex items-center space-x-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <span className="text-sm text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="font-medium text-gray-700">Pricing: </span>
                    <span className="text-blue-600 font-semibold">{service.pricing}</span>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <i className="ri-check-line text-green-600"></i>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Before Choosing Online Therapy</h3>
            <ul className="space-y-2 text-amber-700">
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-amber-600 mt-1"></i>
                <span>Ensure the platform uses licensed, qualified therapists</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-amber-600 mt-1"></i>
                <span>Verify privacy and security measures for your data</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-amber-600 mt-1"></i>
                <span>Check if your insurance covers online therapy services</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-amber-600 mt-1"></i>
                <span>Consider if you're comfortable with video/text-based therapy</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {selectedType === 'support' && (
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Groups</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportGroups.map((group, index) => (
                <div key={index} className="bg-white rounded-xl border border-blue-100 p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">{group.name}</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      {group.type}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {group.cost}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                    <i className="ri-external-link-line"></i>
                    <span>Visit {group.website}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Benefits of Support Groups</h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-green-600 mt-1"></i>
                <span>Connect with others who understand your experience</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-green-600 mt-1"></i>
                <span>Share coping strategies and practical advice</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-green-600 mt-1"></i>
                <span>Reduce feelings of isolation and stigma</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-green-600 mt-1"></i>
                <span>Learn from others' recovery journeys</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-check-line text-green-600 mt-1"></i>
                <span>Provide and receive emotional support</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}