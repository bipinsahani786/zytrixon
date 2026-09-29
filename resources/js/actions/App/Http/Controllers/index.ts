import Admin from './Admin'
import SeoController from './SeoController'
import ContactController from './ContactController'
import CaseStudyController from './CaseStudyController'
import Customer from './Customer'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
SeoController: Object.assign(SeoController, SeoController),
ContactController: Object.assign(ContactController, ContactController),
CaseStudyController: Object.assign(CaseStudyController, CaseStudyController),
Customer: Object.assign(Customer, Customer),
Settings: Object.assign(Settings, Settings),
}

export default Controllers