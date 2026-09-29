import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/z-admin/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::index
 * @see app/Http/Controllers/Admin/AdminBlogController.php:21
 * @route '/z-admin/blogs'
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
* @see \App\Http\Controllers\Admin\AdminBlogController::store
 * @see app/Http/Controllers/Admin/AdminBlogController.php:81
 * @route '/z-admin/blogs'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/z-admin/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::store
 * @see app/Http/Controllers/Admin/AdminBlogController.php:81
 * @route '/z-admin/blogs'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::store
 * @see app/Http/Controllers/Admin/AdminBlogController.php:81
 * @route '/z-admin/blogs'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::store
 * @see app/Http/Controllers/Admin/AdminBlogController.php:81
 * @route '/z-admin/blogs'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::store
 * @see app/Http/Controllers/Admin/AdminBlogController.php:81
 * @route '/z-admin/blogs'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\AdminBlogController::update
 * @see app/Http/Controllers/Admin/AdminBlogController.php:133
 * @route '/z-admin/blogs/{blog}'
 */
export const update = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/z-admin/blogs/{blog}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::update
 * @see app/Http/Controllers/Admin/AdminBlogController.php:133
 * @route '/z-admin/blogs/{blog}'
 */
update.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return update.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::update
 * @see app/Http/Controllers/Admin/AdminBlogController.php:133
 * @route '/z-admin/blogs/{blog}'
 */
update.put = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::update
 * @see app/Http/Controllers/Admin/AdminBlogController.php:133
 * @route '/z-admin/blogs/{blog}'
 */
    const updateForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::update
 * @see app/Http/Controllers/Admin/AdminBlogController.php:133
 * @route '/z-admin/blogs/{blog}'
 */
        updateForm.put = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\AdminBlogController::destroy
 * @see app/Http/Controllers/Admin/AdminBlogController.php:181
 * @route '/z-admin/blogs/{blog}'
 */
export const destroy = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/z-admin/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::destroy
 * @see app/Http/Controllers/Admin/AdminBlogController.php:181
 * @route '/z-admin/blogs/{blog}'
 */
destroy.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return destroy.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::destroy
 * @see app/Http/Controllers/Admin/AdminBlogController.php:181
 * @route '/z-admin/blogs/{blog}'
 */
destroy.delete = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::destroy
 * @see app/Http/Controllers/Admin/AdminBlogController.php:181
 * @route '/z-admin/blogs/{blog}'
 */
    const destroyForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::destroy
 * @see app/Http/Controllers/Admin/AdminBlogController.php:181
 * @route '/z-admin/blogs/{blog}'
 */
        destroyForm.delete = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\AdminBlogController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminBlogController.php:201
 * @route '/z-admin/blogs/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

bulkDelete.definition = {
    methods: ["post"],
    url: '/z-admin/blogs/bulk-delete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminBlogController.php:201
 * @route '/z-admin/blogs/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminBlogController.php:201
 * @route '/z-admin/blogs/bulk-delete'
 */
bulkDelete.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkDelete.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminBlogController.php:201
 * @route '/z-admin/blogs/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::bulkDelete
 * @see app/Http/Controllers/Admin/AdminBlogController.php:201
 * @route '/z-admin/blogs/bulk-delete'
 */
        bulkDeleteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url(options),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
/**
* @see \App\Http\Controllers\Admin\AdminBlogController::toggleFeatured
 * @see app/Http/Controllers/Admin/AdminBlogController.php:228
 * @route '/z-admin/blogs/{blog}/toggle-featured'
 */
export const toggleFeatured = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleFeatured.url(args, options),
    method: 'post',
})

toggleFeatured.definition = {
    methods: ["post"],
    url: '/z-admin/blogs/{blog}/toggle-featured',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::toggleFeatured
 * @see app/Http/Controllers/Admin/AdminBlogController.php:228
 * @route '/z-admin/blogs/{blog}/toggle-featured'
 */
toggleFeatured.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return toggleFeatured.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::toggleFeatured
 * @see app/Http/Controllers/Admin/AdminBlogController.php:228
 * @route '/z-admin/blogs/{blog}/toggle-featured'
 */
toggleFeatured.post = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleFeatured.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::toggleFeatured
 * @see app/Http/Controllers/Admin/AdminBlogController.php:228
 * @route '/z-admin/blogs/{blog}/toggle-featured'
 */
    const toggleFeaturedForm = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleFeatured.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::toggleFeatured
 * @see app/Http/Controllers/Admin/AdminBlogController.php:228
 * @route '/z-admin/blogs/{blog}/toggle-featured'
 */
        toggleFeaturedForm.post = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleFeatured.url(args, options),
            method: 'post',
        })
    
    toggleFeatured.form = toggleFeaturedForm
/**
* @see \App\Http\Controllers\Admin\AdminBlogController::uploadImage
 * @see app/Http/Controllers/Admin/AdminBlogController.php:240
 * @route '/z-admin/blogs/upload-image'
 */
export const uploadImage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

uploadImage.definition = {
    methods: ["post"],
    url: '/z-admin/blogs/upload-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::uploadImage
 * @see app/Http/Controllers/Admin/AdminBlogController.php:240
 * @route '/z-admin/blogs/upload-image'
 */
uploadImage.url = (options?: RouteQueryOptions) => {
    return uploadImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminBlogController::uploadImage
 * @see app/Http/Controllers/Admin/AdminBlogController.php:240
 * @route '/z-admin/blogs/upload-image'
 */
uploadImage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminBlogController::uploadImage
 * @see app/Http/Controllers/Admin/AdminBlogController.php:240
 * @route '/z-admin/blogs/upload-image'
 */
    const uploadImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadImage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminBlogController::uploadImage
 * @see app/Http/Controllers/Admin/AdminBlogController.php:240
 * @route '/z-admin/blogs/upload-image'
 */
        uploadImageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadImage.url(options),
            method: 'post',
        })
    
    uploadImage.form = uploadImageForm
const blogs = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
bulkDelete: Object.assign(bulkDelete, bulkDelete),
toggleFeatured: Object.assign(toggleFeatured, toggleFeatured),
uploadImage: Object.assign(uploadImage, uploadImage),
}

export default blogs