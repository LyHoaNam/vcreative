export const funcSiteMap = (slug = 123) => {
  return {
    home: '/',
    services: '/services',
    servicesDetail: `/services/${slug}`,
    profileDetail: `/profile/${slug}`,
    profileService: `/profile/${slug}/service`,
    profileProduct: `/profile/${slug}/product`,
    collaboratorsRegister: '/collaborators-register',
    collaboratorsRegisterProfile: '/collaborators-register/profile',
    collaboratorsRegisterSkillExperience:
      '/collaborators-register/skill-experience',
    collaboratorsRegisterLinkSecurity: '/collaborators-register/link-security',
    collaboratorsRegisterComplete: '/collaborators-register/complete',
    createServiceSummary: '/create-service/summary',
    createServicePriceList: '/create-service/price-list',
    createServiceDescriptions: '/create-service/descriptions',
    createServiceBrief: '/create-service/brief',
    createServicePictures: '/create-service/pictures',
    createServiceReview: '/create-service/review',
  };
};
