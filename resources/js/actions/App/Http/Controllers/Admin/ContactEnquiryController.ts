import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
const indexb217ab8e8c1cef8c8c3635ff982c3a40 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb217ab8e8c1cef8c8c3635ff982c3a40.url(options),
    method: 'get',
})

indexb217ab8e8c1cef8c8c3635ff982c3a40.definition = {
    methods: ["get","head"],
    url: '/z-admin/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
indexb217ab8e8c1cef8c8c3635ff982c3a40.url = (options?: RouteQueryOptions) => {
    return indexb217ab8e8c1cef8c8c3635ff982c3a40.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
indexb217ab8e8c1cef8c8c3635ff982c3a40.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb217ab8e8c1cef8c8c3635ff982c3a40.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
indexb217ab8e8c1cef8c8c3635ff982c3a40.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb217ab8e8c1cef8c8c3635ff982c3a40.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
    const indexb217ab8e8c1cef8c8c3635ff982c3a40Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexb217ab8e8c1cef8c8c3635ff982c3a40.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
        indexb217ab8e8c1cef8c8c3635ff982c3a40Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb217ab8e8c1cef8c8c3635ff982c3a40.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
        indexb217ab8e8c1cef8c8c3635ff982c3a40Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexb217ab8e8c1cef8c8c3635ff982c3a40.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexb217ab8e8c1cef8c8c3635ff982c3a40.form = indexb217ab8e8c1cef8c8c3635ff982c3a40Form
    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
const indexf09005cb62a65638f41e473110f281f2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf09005cb62a65638f41e473110f281f2.url(options),
    method: 'get',
})

indexf09005cb62a65638f41e473110f281f2.definition = {
    methods: ["get","head"],
    url: '/z-admin/enquiries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
indexf09005cb62a65638f41e473110f281f2.url = (options?: RouteQueryOptions) => {
    return indexf09005cb62a65638f41e473110f281f2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
indexf09005cb62a65638f41e473110f281f2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf09005cb62a65638f41e473110f281f2.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
indexf09005cb62a65638f41e473110f281f2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf09005cb62a65638f41e473110f281f2.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
    const indexf09005cb62a65638f41e473110f281f2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexf09005cb62a65638f41e473110f281f2.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
        indexf09005cb62a65638f41e473110f281f2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf09005cb62a65638f41e473110f281f2.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
        indexf09005cb62a65638f41e473110f281f2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf09005cb62a65638f41e473110f281f2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexf09005cb62a65638f41e473110f281f2.form = indexf09005cb62a65638f41e473110f281f2Form

/**
* Multiple routes resolve to \App\Http\Controllers\Admin\ContactEnquiryController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/z-admin/contacts': indexb217ab8e8c1cef8c8c3635ff982c3a40,
    '/z-admin/enquiries': indexf09005cb62a65638f41e473110f281f2,
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::store
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:95
 * @route '/z-admin/contacts'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/z-admin/contacts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::store
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:95
 * @route '/z-admin/contacts'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::store
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:95
 * @route '/z-admin/contacts'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::store
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:95
 * @route '/z-admin/contacts'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::store
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:95
 * @route '/z-admin/contacts'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::update
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:127
 * @route '/z-admin/contacts/{enquiry}'
 */
export const update = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/z-admin/contacts/{enquiry}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::update
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:127
 * @route '/z-admin/contacts/{enquiry}'
 */
update.url = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enquiry: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enquiry: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enquiry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enquiry: typeof args.enquiry === 'object'
                ? args.enquiry.id
                : args.enquiry,
                }

    return update.definition.url
            .replace('{enquiry}', parsedArgs.enquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::update
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:127
 * @route '/z-admin/contacts/{enquiry}'
 */
update.put = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::update
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:127
 * @route '/z-admin/contacts/{enquiry}'
 */
    const updateForm = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::update
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:127
 * @route '/z-admin/contacts/{enquiry}'
 */
        updateForm.put = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::destroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:148
 * @route '/z-admin/contacts/{enquiry}'
 */
export const destroy = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/z-admin/contacts/{enquiry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::destroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:148
 * @route '/z-admin/contacts/{enquiry}'
 */
destroy.url = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { enquiry: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { enquiry: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    enquiry: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        enquiry: typeof args.enquiry === 'object'
                ? args.enquiry.id
                : args.enquiry,
                }

    return destroy.definition.url
            .replace('{enquiry}', parsedArgs.enquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::destroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:148
 * @route '/z-admin/contacts/{enquiry}'
 */
destroy.delete = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::destroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:148
 * @route '/z-admin/contacts/{enquiry}'
 */
    const destroyForm = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::destroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:148
 * @route '/z-admin/contacts/{enquiry}'
 */
        destroyForm.delete = (args: { enquiry: number | { id: number } } | [enquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDestroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
export const bulkDestroy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDestroy.url(options),
    method: 'post',
})

bulkDestroy.definition = {
    methods: ["post"],
    url: '/z-admin/contacts/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDestroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
bulkDestroy.url = (options?: RouteQueryOptions) => {
    return bulkDestroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDestroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
bulkDestroy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDestroy.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDestroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
    const bulkDestroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDestroy.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDestroy
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
        bulkDestroyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDestroy.url(options),
            method: 'post',
        })
    
    bulkDestroy.form = bulkDestroyForm
const ContactEnquiryController = { index, store, update, destroy, bulkDestroy }

export default ContactEnquiryController