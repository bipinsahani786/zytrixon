import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import location from './location'
/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
export const show = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/services/{service_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
show.url = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service_slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    service_slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service_slug: args.service_slug,
                }

    return show.definition.url
            .replace('{service_slug}', parsedArgs.service_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
show.get = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
show.head = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
    const showForm = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
        showForm.get = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:22
 * @route '/services/{service_slug}'
 */
        showForm.head = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const service = {
    show: Object.assign(show, show),
location: Object.assign(location, location),
}

export default service