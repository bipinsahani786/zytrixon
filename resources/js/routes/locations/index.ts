import {
    queryParams,
    type RouteQueryOptions,
    type RouteDefinition,
    type RouteFormDefinition,
    applyUrlDefaults,
} from './../../wayfinder';
/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});

index.definition = {
    methods: ['get', 'head'],
    url: '/locations',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
const indexForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\SeoController::index
 * @see app/Http/Controllers/SeoController.php:23
 * @route '/locations'
 */
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

index.form = indexForm;
/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
export const show = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
});

show.definition = {
    methods: ['get', 'head'],
    url: '/locations/{location_slug}',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
show.url = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location_slug: args };
    }

    if (Array.isArray(args)) {
        args = {
            location_slug: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        location_slug: args.location_slug,
    };

    return (
        show.definition.url
            .replace('{location_slug}', parsedArgs.location_slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
show.get = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
show.head = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
const showForm = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
showForm.get = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\SeoController::show
 * @see app/Http/Controllers/SeoController.php:32
 * @route '/locations/{location_slug}'
 */
showForm.head = (
    args:
        | { location_slug: string | number }
        | [location_slug: string | number]
        | string
        | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

show.form = showForm;
const locations = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
};

export default locations;
