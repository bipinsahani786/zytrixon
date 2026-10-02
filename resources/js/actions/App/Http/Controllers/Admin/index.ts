import AuthController from './AuthController'
import AdminDashboardController from './AdminDashboardController'
import AdminUserController from './AdminUserController'
import ContactEnquiryController from './ContactEnquiryController'
import AdminBlogController from './AdminBlogController'
import AdminSeoPageController from './AdminSeoPageController'
const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
AdminUserController: Object.assign(AdminUserController, AdminUserController),
ContactEnquiryController: Object.assign(ContactEnquiryController, ContactEnquiryController),
AdminBlogController: Object.assign(AdminBlogController, AdminBlogController),
AdminSeoPageController: Object.assign(AdminSeoPageController, AdminSeoPageController),
}

export default Admin