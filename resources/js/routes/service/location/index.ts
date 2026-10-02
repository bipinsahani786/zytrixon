import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
export const show = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/services/{service_slug}/in/{location_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
show.url = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    service_slug: args[0],
                    location_slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service_slug: args.service_slug,
                                location_slug: args.location_slug,
                }

    return show.definition.url
            .replace('{service_slug}', parsedArgs.service_slug.toString())
            .replace('{location_slug}', parsedArgs.location_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
show.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
show.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
    const showForm = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
        showForm.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/in/{location_slug}'
 */
        showForm.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
export const direct = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: direct.url(args, options),
    method: 'get',
})

direct.definition = {
    methods: ["get","head"],
    url: '/services/{service_slug}/{location_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
direct.url = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    service_slug: args[0],
                    location_slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service_slug: args.service_slug,
                                location_slug: args.location_slug,
                }

    return direct.definition.url
            .replace('{service_slug}', parsedArgs.service_slug.toString())
            .replace('{location_slug}', parsedArgs.location_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
direct.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: direct.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
direct.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: direct.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
    const directForm = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: direct.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
        directForm.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: direct.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::direct
 * @see app/Http/Controllers/SeoController.php:44
 * @route '/services/{service_slug}/{location_slug}'
 */
        directForm.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: direct.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    direct.form = directForm
const location = {
    show: Object.assign(show, show),
direct: Object.assign(direct, direct),
}

export default location