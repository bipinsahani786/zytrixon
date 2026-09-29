import Admin from './Admin'
import SeoController from './SeoController'
import ContactController from './ContactController'
import BlogController from './BlogController'
import CaseStudyController from './CaseStudyController'
import Customer from './Customer'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
SeoController: Object.assign(SeoController, SeoController),
ContactController: Object.assign(ContactController, ContactController),
BlogController: Object.assign(BlogController, BlogController),
CaseStudyController: Object.assign(CaseStudyController, CaseStudyController),
Customer: Object.assign(Customer, Customer),
Settings: Object.assign(Settings, Settings),
}

export default Controllers