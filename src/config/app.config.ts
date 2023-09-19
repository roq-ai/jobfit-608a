interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Job Seeker', 'Recruiter', 'Business Owner', 'Job Fit Administrator', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'JobFit',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profile on JobFit',
    'Invite Job Seekers, Recruiters, HR Managers, and Job Fit Administrators to join Organization on JobFit',
    "Update Organization's profile",
    'Remove any Job Seeker, Recruiter, HR Manager, or Job Fit Administrator from Organization on JobFit',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8cb78c2d-dd79-4655-b0a6-c3f1f583fe81',
};
