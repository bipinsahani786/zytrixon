import AuthController from './AuthController'
import AdminDashboardController from './AdminDashboardController'
const Admin = {
    AuthController: Object.assign(AuthController, AuthController),
AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
}

export default Admin