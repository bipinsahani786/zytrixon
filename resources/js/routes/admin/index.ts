import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import users from './users'
import contacts from './contacts'
import enquiries from './enquiries'
import blogs from './blogs'
/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/z-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Admin\AuthController::logout
 * @see app/Http/Controllers/Admin/AuthController.php:69
 * @route '/z-admin/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/z-admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::logout
 * @see app/Http/Controllers/Admin/AuthController.php:69
 * @route '/z-admin/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::logout
 * @see app/Http/Controllers/Admin/AuthController.php:69
 * @route '/z-admin/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AuthController::logout
 * @see app/Http/Controllers/Admin/AuthController.php:69
 * @route '/z-admin/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AuthController::logout
 * @see app/Http/Controllers/Admin/AuthController.php:69
 * @route '/z-admin/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/z-admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:20
 * @route '/z-admin/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const admin = {
    login: Object.assign(login, loginDf2c2a),
logout: Object.assign(logout, logout),
dashboard: Object.assign(dashboard, dashboard),
users: Object.assign(users, users),
contacts: Object.assign(contacts, contacts),
enquiries: Object.assign(enquiries, enquiries),
blogs: Object.assign(blogs, blogs),
}

export default admin