import ProjectDetails from './ProjectDetails';

export default ProjectDetails;

// Ensure CaseStudyDetails never receives a sidebar layout
(ProjectDetails as any).layout = null;
