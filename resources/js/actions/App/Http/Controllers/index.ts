import SeoController from './SeoController'
import CaseStudyController from './CaseStudyController'
import Settings from './Settings'
const Controllers = {
    SeoController: Object.assign(SeoController, SeoController),
CaseStudyController: Object.assign(CaseStudyController, CaseStudyController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers