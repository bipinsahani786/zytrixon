import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
const showLoginb6041c76e8e1cd791f8f89d035d48611 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})

showLoginb6041c76e8e1cd791f8f89d035d48611.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
showLoginb6041c76e8e1cd791f8f89d035d48611.url = (options?: RouteQueryOptions) => {
    return showLoginb6041c76e8e1cd791f8f89d035d48611.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
showLoginb6041c76e8e1cd791f8f89d035d48611.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
showLoginb6041c76e8e1cd791f8f89d035d48611.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
    const showLoginb6041c76e8e1cd791f8f89d035d48611Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
        showLoginb6041c76e8e1cd791f8f89d035d48611Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLoginb6041c76e8e1cd791f8f89d035d48611.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/login'
 */
        showLoginb6041c76e8e1cd791f8f89d035d48611Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLoginb6041c76e8e1cd791f8f89d035d48611.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLoginb6041c76e8e1cd791f8f89d035d48611.form = showLoginb6041c76e8e1cd791f8f89d035d48611Form
    /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
const showLogin071907bd01b1e611cfd628d3047ce83b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin071907bd01b1e611cfd628d3047ce83b.url(options),
    method: 'get',
})

showLogin071907bd01b1e611cfd628d3047ce83b.definition = {
    methods: ["get","head"],
    url: '/z-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
showLogin071907bd01b1e611cfd628d3047ce83b.url = (options?: RouteQueryOptions) => {
    return showLogin071907bd01b1e611cfd628d3047ce83b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
showLogin071907bd01b1e611cfd628d3047ce83b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLogin071907bd01b1e611cfd628d3047ce83b.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
showLogin071907bd01b1e611cfd628d3047ce83b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLogin071907bd01b1e611cfd628d3047ce83b.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
    const showLogin071907bd01b1e611cfd628d3047ce83bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLogin071907bd01b1e611cfd628d3047ce83b.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
        showLogin071907bd01b1e611cfd628d3047ce83bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLogin071907bd01b1e611cfd628d3047ce83b.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AuthController::showLogin
 * @see app/Http/Controllers/Admin/AuthController.php:18
 * @route '/z-admin'
 */
        showLogin071907bd01b1e611cfd628d3047ce83bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLogin071907bd01b1e611cfd628d3047ce83b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLogin071907bd01b1e611cfd628d3047ce83b.form = showLogin071907bd01b1e611cfd628d3047ce83bForm

/**
* Multiple routes resolve to \App\Http\Controllers\Admin\AuthController::showLogin, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `showLogin['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const showLogin = {
    '/login': showLoginb6041c76e8e1cd791f8f89d035d48611,
    '/z-admin': showLogin071907bd01b1e611cfd628d3047ce83b,
}

/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:39
 * @route '/z-admin/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/z-admin/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:39
 * @route '/z-admin/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:39
 * @route '/z-admin/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:39
 * @route '/z-admin/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AuthController::login
 * @see app/Http/Controllers/Admin/AuthController.php:39
 * @route '/z-admin/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
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
const AuthController = { showLogin, login, logout }

export default AuthController