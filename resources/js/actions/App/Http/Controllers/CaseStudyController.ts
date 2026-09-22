import {
    queryParams,
    type RouteQueryOptions,
    type RouteDefinition,
    type RouteFormDefinition,
    applyUrlDefaults,
} from './../../../../wayfinder';
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
const show151bd03345b6d71d658fdb7ecf2a2a74 = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, options),
    method: 'get',
});

show151bd03345b6d71d658fdb7ecf2a2a74.definition = {
    methods: ['get', 'head'],
    url: '/portfolio/{slug}',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
show151bd03345b6d71d658fdb7ecf2a2a74.url = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args };
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        slug: args.slug,
    };

    return (
        show151bd03345b6d71d658fdb7ecf2a2a74.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
show151bd03345b6d71d658fdb7ecf2a2a74.get = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
show151bd03345b6d71d658fdb7ecf2a2a74.head = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
const show151bd03345b6d71d658fdb7ecf2a2a74Form = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
show151bd03345b6d71d658fdb7ecf2a2a74Form.get = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/portfolio/{slug}'
 */
show151bd03345b6d71d658fdb7ecf2a2a74Form.head = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show151bd03345b6d71d658fdb7ecf2a2a74.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

show151bd03345b6d71d658fdb7ecf2a2a74.form =
    show151bd03345b6d71d658fdb7ecf2a2a74Form;
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
const showd1756fd17408b22f921070491ad8732a = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: showd1756fd17408b22f921070491ad8732a.url(args, options),
    method: 'get',
});

showd1756fd17408b22f921070491ad8732a.definition = {
    methods: ['get', 'head'],
    url: '/case-studies/{slug}',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
showd1756fd17408b22f921070491ad8732a.url = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args };
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        slug: args.slug,
    };

    return (
        showd1756fd17408b22f921070491ad8732a.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
showd1756fd17408b22f921070491ad8732a.get = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: showd1756fd17408b22f921070491ad8732a.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
showd1756fd17408b22f921070491ad8732a.head = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: showd1756fd17408b22f921070491ad8732a.url(args, options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
const showd1756fd17408b22f921070491ad8732aForm = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: showd1756fd17408b22f921070491ad8732a.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
showd1756fd17408b22f921070491ad8732aForm.get = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: showd1756fd17408b22f921070491ad8732a.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::show
 * @see app/Http/Controllers/CaseStudyController.php:17
 * @route '/case-studies/{slug}'
 */
showd1756fd17408b22f921070491ad8732aForm.head = (
    args: { slug: string | number } | [slug: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: showd1756fd17408b22f921070491ad8732a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

showd1756fd17408b22f921070491ad8732a.form =
    showd1756fd17408b22f921070491ad8732aForm;

/**
 * Multiple routes resolve to \App\Http\Controllers\CaseStudyController::show, so this export is a
 * dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
 * or import the route by name from your generated `routes/` directory.
 */
export const show = {
    '/portfolio/{slug}': show151bd03345b6d71d658fdb7ecf2a2a74,
    '/case-studies/{slug}': showd1756fd17408b22f921070491ad8732a,
};

/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});

index.definition = {
    methods: ['get', 'head'],
    url: '/case-studies',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
const indexForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
 */
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\CaseStudyController::index
 * @see app/Http/Controllers/CaseStudyController.php:12
 * @route '/case-studies'
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
const CaseStudyController = { show, index };

export default CaseStudyController;
