import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:14
 * @route '/services'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
export const locationsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: locationsIndex.url(options),
    method: 'get',
})

locationsIndex.definition = {
    methods: ["get","head"],
    url: '/locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
locationsIndex.url = (options?: RouteQueryOptions) => {
    return locationsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
locationsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: locationsIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
locationsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: locationsIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
    const locationsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: locationsIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
        locationsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: locationsIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::locationsIndex
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
        locationsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: locationsIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    locationsIndex.form = locationsIndexForm
/**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
export const showLocation = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLocation.url(args, options),
    method: 'get',
})

showLocation.definition = {
    methods: ["get","head"],
    url: '/locations/{location_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
showLocation.url = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location_slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    location_slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        location_slug: args.location_slug,
                }

    return showLocation.definition.url
            .replace('{location_slug}', parsedArgs.location_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
showLocation.get = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLocation.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
showLocation.head = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLocation.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
    const showLocationForm = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLocation.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
        showLocationForm.get = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLocation.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::showLocation
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
        showLocationForm.head = (args: { location_slug: string | number } | [location_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLocation.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLocation.form = showLocationForm
/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
const showServiceLocationf6d09d9092eb835f4a0aff152ee549d3 = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, options),
    method: 'get',
})

showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.definition = {
    methods: ["get","head"],
    url: '/services/{service_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.definition.url
            .replace('{service_slug}', parsedArgs.service_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.get = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.head = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
    const showServiceLocationf6d09d9092eb835f4a0aff152ee549d3Form = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
        showServiceLocationf6d09d9092eb835f4a0aff152ee549d3Form.get = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}'
 */
        showServiceLocationf6d09d9092eb835f4a0aff152ee549d3Form.head = (args: { service_slug: string | number } | [service_slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showServiceLocationf6d09d9092eb835f4a0aff152ee549d3.form = showServiceLocationf6d09d9092eb835f4a0aff152ee549d3Form
    /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
const showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, options),
    method: 'get',
})

showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.definition = {
    methods: ["get","head"],
    url: '/services/{service_slug}/in/{location_slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions) => {
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

    return showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.definition.url
            .replace('{service_slug}', parsedArgs.service_slug.toString())
            .replace('{location_slug}', parsedArgs.location_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
    const showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaaForm = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
        showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaaForm.get = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SeoController::showServiceLocation
 * @see app/Http/Controllers/SeoController.php:43
 * @route '/services/{service_slug}/in/{location_slug}'
 */
        showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaaForm.head = (args: { service_slug: string | number, location_slug: string | number } | [service_slug: string | number, location_slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa.form = showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaaForm

/**
* Multiple routes resolve to \App\Http\Controllers\SeoController::showServiceLocation, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `showServiceLocation['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const showServiceLocation = {
    '/services/{service_slug}': showServiceLocationf6d09d9092eb835f4a0aff152ee549d3,
    '/services/{service_slug}/in/{location_slug}': showServiceLocation13ce03ebdeb54ae9f497a8c08b92bfaa,
}

const SeoController = { index, locationsIndex, showLocation, showServiceLocation }

export default SeoController