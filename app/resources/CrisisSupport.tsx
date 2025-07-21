'use client';

export default function CrisisSupport() {
  const crisisResources = [
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '988',
      description: '24/7 free and confidential support for people in distress',
      website: 'https://suicidepreventionlifeline.org',
      available: '24/7'
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      description: 'Free, 24/7 support for those in crisis via text message',
      website: 'https://crisistextline.org',
      available: '24/7'
    },
    {
      name: 'SAMHSA National Helpline',
      phone: '1-800-662-4357',
      description: 'Treatment referral and information service for mental health',
      website: 'https://samhsa.gov',
      available: '24/7'
    },
    {
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      description: 'Support for domestic violence survivors and their families',
      website: 'https://thehotline.org',
      available: '24/7'
    },
    {
      name: 'LGBTQ National Hotline',
      phone: '1-888-843-4564',
      description: 'Support for LGBTQ+ individuals and their families',
      website: 'https://lgbtqnationalhotline.org',
      available: 'Mon-Fri 1-9 PM, Sat 9 AM-2 PM'
    },
    {
      name: 'Veterans Crisis Line',
      phone: '1-800-273-8255',
      description: 'Confidential support for veterans and their families',
      website: 'https://veteranscrisisline.net',
      available: '24/7'
    },
  ];

  const safetyPlanSteps = [
    {
      step: 1,
      title: 'Recognize warning signs',
      description: 'Identify thoughts, feelings, or behaviors that indicate a crisis may be developing'
    },
    {
      step: 2,
      title: 'Internal coping strategies',
      description: 'List things you can do to take your mind off your problems without contacting others'
    },
    {
      step: 3,
      title: 'Social contacts for distraction',
      description: 'List people and settings that provide distraction and support'
    },
    {
      step: 4,
      title: 'Family and friends for help',
      description: 'List people who can help during a crisis and how to contact them'
    },
    {
      step: 5,
      title: 'Professional contacts',
      description: 'List mental health professionals and agencies to contact during a crisis'
    },
    {
      step: 6,
      title: 'Make environment safe',
      description: 'Remove or limit access to lethal means or methods of self-harm'
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Crisis Support</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <i className="ri-alert-line text-red-600 text-lg"></i>
            <h3 className="font-semibold text-red-800">If you're in immediate danger</h3>
          </div>
          <p className="text-red-700 mb-3">
            Call 911 or go to your nearest emergency room immediately
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line"></i>
              <span>Call 911</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line"></i>
              <span>Call 988</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Crisis Hotlines & Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {crisisResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl border border-blue-100 p-6">
              <h4 className="font-semibold text-gray-800 mb-2">{resource.name}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line text-blue-600"></i>
                  <span className="font-medium text-blue-600">{resource.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-gray-500"></i>
                  <span className="text-gray-600 text-sm">{resource.available}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
                <i className="ri-external-link-line"></i>
                <span>Visit Website</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Planning</h3>
        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <p className="text-blue-800 mb-4">
            A safety plan is a prioritized written list of coping strategies and support systems that can help during a crisis.
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-download-line"></i>
            <span>Download Safety Plan Template</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {safetyPlanSteps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-blue-100 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}