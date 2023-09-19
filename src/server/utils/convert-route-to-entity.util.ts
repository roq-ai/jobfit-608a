const mapping: Record<string, string> = {
  applications: 'application',
  jobs: 'job',
  organizations: 'organization',
  resumes: 'resume',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
