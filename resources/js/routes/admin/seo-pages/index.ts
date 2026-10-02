import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/z-admin/seo-pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::index
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:24
 * @route '/z-admin/seo-pages'
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
* @see \App\Http\Controllers\Admin\AdminSeoPageController::store
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:75
 * @route '/z-admin/seo-pages'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/z-admin/seo-pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::store
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:75
 * @route '/z-admin/seo-pages'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::store
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:75
 * @route '/z-admin/seo-pages'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::store
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:75
 * @route '/z-admin/seo-pages'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::store
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:75
 * @route '/z-admin/seo-pages'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::update
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:110
 * @route '/z-admin/seo-pages/{seoPage}'
 */
export const update = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/z-admin/seo-pages/{seoPage}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::update
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:110
 * @route '/z-admin/seo-pages/{seoPage}'
 */
update.url = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seoPage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { seoPage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    seoPage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seoPage: typeof args.seoPage === 'object'
                ? args.seoPage.id
                : args.seoPage,
                }

    return update.definition.url
            .replace('{seoPage}', parsedArgs.seoPage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::update
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:110
 * @route '/z-admin/seo-pages/{seoPage}'
 */
update.put = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::update
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:110
 * @route '/z-admin/seo-pages/{seoPage}'
 */
    const updateForm = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::update
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:110
 * @route '/z-admin/seo-pages/{seoPage}'
 */
        updateForm.put = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\AdminSeoPageController::destroy
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:137
 * @route '/z-admin/seo-pages/{seoPage}'
 */
export const destroy = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/z-admin/seo-pages/{seoPage}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::destroy
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:137
 * @route '/z-admin/seo-pages/{seoPage}'
 */
destroy.url = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { seoPage: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { seoPage: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    seoPage: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        seoPage: typeof args.seoPage === 'object'
                ? args.seoPage.id
                : args.seoPage,
                }

    return destroy.definition.url
            .replace('{seoPage}', parsedArgs.seoPage.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::destroy
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:137
 * @route '/z-admin/seo-pages/{seoPage}'
 */
destroy.delete = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::destroy
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:137
 * @route '/z-admin/seo-pages/{seoPage}'
 */
    const destroyForm = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::destroy
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:137
 * @route '/z-admin/seo-pages/{seoPage}'
 */
        destroyForm.delete = (args: { seoPage: number | { id: number } } | [seoPage: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:146
 * @route '/z-admin/seo-pages/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

bulkDelete.definition = {
    methods: ["post"],
    url: '/z-admin/seo-pages/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:146
 * @route '/z-admin/seo-pages/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:146
 * @route '/z-admin/seo-pages/bulk-delete'
 */
bulkDelete.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:146
 * @route '/z-admin/seo-pages/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:146
 * @route '/z-admin/seo-pages/bulk-delete'
 */
        bulkDeleteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url(options),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::aiGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:156
 * @route '/z-admin/seo-pages/ai-generate'
 */
export const aiGenerate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: aiGenerate.url(options),
    method: 'post',
})

aiGenerate.definition = {
    methods: ["post"],
    url: '/z-admin/seo-pages/ai-generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::aiGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:156
 * @route '/z-admin/seo-pages/ai-generate'
 */
aiGenerate.url = (options?: RouteQueryOptions) => {
    return aiGenerate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::aiGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:156
 * @route '/z-admin/seo-pages/ai-generate'
 */
aiGenerate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: aiGenerate.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::aiGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:156
 * @route '/z-admin/seo-pages/ai-generate'
 */
    const aiGenerateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: aiGenerate.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::aiGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:156
 * @route '/z-admin/seo-pages/ai-generate'
 */
        aiGenerateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: aiGenerate.url(options),
            method: 'post',
        })
    
    aiGenerate.form = aiGenerateForm
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::humanize
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:191
 * @route '/z-admin/seo-pages/humanize'
 */
export const humanize = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: humanize.url(options),
    method: 'post',
})

humanize.definition = {
    methods: ["post"],
    url: '/z-admin/seo-pages/humanize',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::humanize
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:191
 * @route '/z-admin/seo-pages/humanize'
 */
humanize.url = (options?: RouteQueryOptions) => {
    return humanize.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::humanize
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:191
 * @route '/z-admin/seo-pages/humanize'
 */
humanize.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: humanize.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::humanize
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:191
 * @route '/z-admin/seo-pages/humanize'
 */
    const humanizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: humanize.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::humanize
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:191
 * @route '/z-admin/seo-pages/humanize'
 */
        humanizeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: humanize.url(options),
            method: 'post',
        })
    
    humanize.form = humanizeForm
/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:213
 * @route '/z-admin/seo-pages/bulk-generate'
 */
export const bulkGenerate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkGenerate.url(options),
    method: 'post',
})

bulkGenerate.definition = {
    methods: ["post"],
    url: '/z-admin/seo-pages/bulk-generate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:213
 * @route '/z-admin/seo-pages/bulk-generate'
 */
bulkGenerate.url = (options?: RouteQueryOptions) => {
    return bulkGenerate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:213
 * @route '/z-admin/seo-pages/bulk-generate'
 */
bulkGenerate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkGenerate.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:213
 * @route '/z-admin/seo-pages/bulk-generate'
 */
    const bulkGenerateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkGenerate.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminSeoPageController::bulkGenerate
 * @see app/Http/Controllers/Admin/AdminSeoPageController.php:213
 * @route '/z-admin/seo-pages/bulk-generate'
 */
        bulkGenerateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkGenerate.url(options),
            method: 'post',
        })
    
    bulkGenerate.form = bulkGenerateForm
const seoPages = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
bulkDelete: Object.assign(bulkDelete, bulkDelete),
aiGenerate: Object.assign(aiGenerate, aiGenerate),
humanize: Object.assign(humanize, humanize),
bulkGenerate: Object.assign(bulkGenerate, bulkGenerate),
}

export default seoPages