import {
    queryParams,
    type RouteQueryOptions,
    type RouteDefinition,
    type RouteFormDefinition,
} from './../../wayfinder';
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
});

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ['get', 'head'],
    url: '/',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller980bb49ee7ae63891f1d891d2fbcf1c9.form =
    Controller980bb49ee7ae63891f1d891d2fbcf1c9Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
const Controller535fd093ca1d5254af5dc12ac208e8d5 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
});

Controller535fd093ca1d5254af5dc12ac208e8d5.definition = {
    methods: ['get', 'head'],
    url: '/about',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller535fd093ca1d5254af5dc12ac208e8d5.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
const Controller535fd093ca1d5254af5dc12ac208e8d5Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller535fd093ca1d5254af5dc12ac208e8d5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller535fd093ca1d5254af5dc12ac208e8d5.form =
    Controller535fd093ca1d5254af5dc12ac208e8d5Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
const Controller04f96a4b7a6a628af70dbdb6a16978b4 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller04f96a4b7a6a628af70dbdb6a16978b4.url(options),
    method: 'get',
});

Controller04f96a4b7a6a628af70dbdb6a16978b4.definition = {
    methods: ['get', 'head'],
    url: '/portfolio',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
Controller04f96a4b7a6a628af70dbdb6a16978b4.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller04f96a4b7a6a628af70dbdb6a16978b4.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
Controller04f96a4b7a6a628af70dbdb6a16978b4.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller04f96a4b7a6a628af70dbdb6a16978b4.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
Controller04f96a4b7a6a628af70dbdb6a16978b4.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller04f96a4b7a6a628af70dbdb6a16978b4.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
const Controller04f96a4b7a6a628af70dbdb6a16978b4Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller04f96a4b7a6a628af70dbdb6a16978b4.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
Controller04f96a4b7a6a628af70dbdb6a16978b4Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller04f96a4b7a6a628af70dbdb6a16978b4.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/portfolio'
 */
Controller04f96a4b7a6a628af70dbdb6a16978b4Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller04f96a4b7a6a628af70dbdb6a16978b4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller04f96a4b7a6a628af70dbdb6a16978b4.form =
    Controller04f96a4b7a6a628af70dbdb6a16978b4Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
const Controller36402f3b102b68b92616e946647e00cf = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
});

Controller36402f3b102b68b92616e946647e00cf.definition = {
    methods: ['get', 'head'],
    url: '/contact',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller36402f3b102b68b92616e946647e00cf.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
const Controller36402f3b102b68b92616e946647e00cfForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cfForm.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cfForm.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller36402f3b102b68b92616e946647e00cf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller36402f3b102b68b92616e946647e00cf.form =
    Controller36402f3b102b68b92616e946647e00cfForm;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
const Controllera5214f8c8bb514adcdb1a0ee38e347fe = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url(options),
    method: 'get',
});

Controllera5214f8c8bb514adcdb1a0ee38e347fe.definition = {
    methods: ['get', 'head'],
    url: '/team',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
Controllera5214f8c8bb514adcdb1a0ee38e347fe.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controllera5214f8c8bb514adcdb1a0ee38e347fe.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
Controllera5214f8c8bb514adcdb1a0ee38e347fe.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
Controllera5214f8c8bb514adcdb1a0ee38e347fe.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
const Controllera5214f8c8bb514adcdb1a0ee38e347feForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
Controllera5214f8c8bb514adcdb1a0ee38e347feForm.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/team'
 */
Controllera5214f8c8bb514adcdb1a0ee38e347feForm.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllera5214f8c8bb514adcdb1a0ee38e347fe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controllera5214f8c8bb514adcdb1a0ee38e347fe.form =
    Controllera5214f8c8bb514adcdb1a0ee38e347feForm;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
const Controller0281689d11c3db12eb0f0bc21b3e4ed4 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
});

Controller0281689d11c3db12eb0f0bc21b3e4ed4.definition = {
    methods: ['get', 'head'],
    url: '/blog',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller0281689d11c3db12eb0f0bc21b3e4ed4.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
const Controller0281689d11c3db12eb0f0bc21b3e4ed4Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/blog'
 */
Controller0281689d11c3db12eb0f0bc21b3e4ed4Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller0281689d11c3db12eb0f0bc21b3e4ed4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller0281689d11c3db12eb0f0bc21b3e4ed4.form =
    Controller0281689d11c3db12eb0f0bc21b3e4ed4Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
const Controller03d31eb80a178b8caec7a6c184c0169b = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
});

Controller03d31eb80a178b8caec7a6c184c0169b.definition = {
    methods: ['get', 'head'],
    url: '/careers',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller03d31eb80a178b8caec7a6c184c0169b.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169b.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
const Controller03d31eb80a178b8caec7a6c184c0169bForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169bForm.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller03d31eb80a178b8caec7a6c184c0169b.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/careers'
 */
Controller03d31eb80a178b8caec7a6c184c0169bForm.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller03d31eb80a178b8caec7a6c184c0169b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller03d31eb80a178b8caec7a6c184c0169b.form =
    Controller03d31eb80a178b8caec7a6c184c0169bForm;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
const Controller8ee05578d379a893ea5fb10445367080 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller8ee05578d379a893ea5fb10445367080.url(options),
    method: 'get',
});

Controller8ee05578d379a893ea5fb10445367080.definition = {
    methods: ['get', 'head'],
    url: '/process',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
Controller8ee05578d379a893ea5fb10445367080.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller8ee05578d379a893ea5fb10445367080.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
Controller8ee05578d379a893ea5fb10445367080.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller8ee05578d379a893ea5fb10445367080.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
Controller8ee05578d379a893ea5fb10445367080.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller8ee05578d379a893ea5fb10445367080.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
const Controller8ee05578d379a893ea5fb10445367080Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller8ee05578d379a893ea5fb10445367080.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
Controller8ee05578d379a893ea5fb10445367080Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller8ee05578d379a893ea5fb10445367080.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/process'
 */
Controller8ee05578d379a893ea5fb10445367080Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller8ee05578d379a893ea5fb10445367080.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller8ee05578d379a893ea5fb10445367080.form =
    Controller8ee05578d379a893ea5fb10445367080Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
const Controller546d1d979582dcab4cda77f98be026ca = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
});

Controller546d1d979582dcab4cda77f98be026ca.definition = {
    methods: ['get', 'head'],
    url: '/privacy-policy',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
Controller546d1d979582dcab4cda77f98be026ca.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller546d1d979582dcab4cda77f98be026ca.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
Controller546d1d979582dcab4cda77f98be026ca.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
Controller546d1d979582dcab4cda77f98be026ca.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
const Controller546d1d979582dcab4cda77f98be026caForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
Controller546d1d979582dcab4cda77f98be026caForm.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller546d1d979582dcab4cda77f98be026ca.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy-policy'
 */
Controller546d1d979582dcab4cda77f98be026caForm.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller546d1d979582dcab4cda77f98be026ca.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller546d1d979582dcab4cda77f98be026ca.form =
    Controller546d1d979582dcab4cda77f98be026caForm;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
const Controller1e68cefabb38f5fd8767625e1e3eeb68 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller1e68cefabb38f5fd8767625e1e3eeb68.url(options),
    method: 'get',
});

Controller1e68cefabb38f5fd8767625e1e3eeb68.definition = {
    methods: ['get', 'head'],
    url: '/terms-and-conditions',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
Controller1e68cefabb38f5fd8767625e1e3eeb68.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller1e68cefabb38f5fd8767625e1e3eeb68.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
Controller1e68cefabb38f5fd8767625e1e3eeb68.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller1e68cefabb38f5fd8767625e1e3eeb68.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
Controller1e68cefabb38f5fd8767625e1e3eeb68.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller1e68cefabb38f5fd8767625e1e3eeb68.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
const Controller1e68cefabb38f5fd8767625e1e3eeb68Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller1e68cefabb38f5fd8767625e1e3eeb68.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
Controller1e68cefabb38f5fd8767625e1e3eeb68Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller1e68cefabb38f5fd8767625e1e3eeb68.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms-and-conditions'
 */
Controller1e68cefabb38f5fd8767625e1e3eeb68Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller1e68cefabb38f5fd8767625e1e3eeb68.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller1e68cefabb38f5fd8767625e1e3eeb68.form =
    Controller1e68cefabb38f5fd8767625e1e3eeb68Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
const Controller42a740574ecbfbac32f8cc353fc32db9 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
});

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ['get', 'head'],
    url: '/dashboard',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controller42a740574ecbfbac32f8cc353fc32db9.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
const Controller42a740574ecbfbac32f8cc353fc32db9Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controller42a740574ecbfbac32f8cc353fc32db9.form =
    Controller42a740574ecbfbac32f8cc353fc32db9Form;
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
});

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ['get', 'head'],
    url: '/settings/appearance',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (
    options?: RouteQueryOptions,
) => {
    return (
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url +
        queryParams(options)
    );
};

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
});

/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
});
/**
 * @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form =
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form;

/**
 * Multiple routes resolve to \Inertia\Controller::Controller, so this export is a
 * dictionary keyed by URI rather than a callable. Call a specific route with `Controller['<uri>'](...)`,
 * or import the route by name from your generated `routes/` directory.
 */
const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/about': Controller535fd093ca1d5254af5dc12ac208e8d5,
    '/portfolio': Controller04f96a4b7a6a628af70dbdb6a16978b4,
    '/contact': Controller36402f3b102b68b92616e946647e00cf,
    '/team': Controllera5214f8c8bb514adcdb1a0ee38e347fe,
    '/blog': Controller0281689d11c3db12eb0f0bc21b3e4ed4,
    '/careers': Controller03d31eb80a178b8caec7a6c184c0169b,
    '/process': Controller8ee05578d379a893ea5fb10445367080,
    '/privacy-policy': Controller546d1d979582dcab4cda77f98be026ca,
    '/terms-and-conditions': Controller1e68cefabb38f5fd8767625e1e3eeb68,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
};

export default Controller;
