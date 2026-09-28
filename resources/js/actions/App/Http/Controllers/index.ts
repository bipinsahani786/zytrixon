import SeoController from './SeoController'
import CaseStudyController from './CaseStudyController'
import Admin from './Admin'
import Customer from './Customer'
import Settings from './Settings'
const Controllers = {
    SeoController: Object.assign(SeoController, SeoController),
CaseStudyController: Object.assign(CaseStudyController, CaseStudyController),
Admin: Object.assign(Admin, Admin),
Customer: Object.assign(Customer, Customer),
Settings: Object.assign(Settings, Settings),
}

export default Controllers