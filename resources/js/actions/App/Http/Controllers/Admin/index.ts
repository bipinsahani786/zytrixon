import AuthController from './AuthController'
import AdminDashboardController from './AdminDashboardController'
import AdminUserController from './AdminUserController'
import ContactEnquiryController from './ContactEnquiryController'
import AdminBlogController from './AdminBlogController'
const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
AdminUserController: Object.assign(AdminUserController, AdminUserController),
ContactEnquiryController: Object.assign(ContactEnquiryController, ContactEnquiryController),
AdminBlogController: Object.assign(AdminBlogController, AdminBlogController),
}

export default Admin