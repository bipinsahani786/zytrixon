import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/z-admin/contacts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/contacts'
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
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDelete
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

bulkDelete.definition = {
    methods: ["post"],
    url: '/z-admin/contacts/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDelete
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDelete
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
bulkDelete.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDelete
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::bulkDelete
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:158
 * @route '/z-admin/contacts/bulk-delete'
 */
        bulkDeleteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url(options),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
const contacts = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
bulkDelete: Object.assign(bulkDelete, bulkDelete),
}

export default contacts