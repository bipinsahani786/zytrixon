import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/z-admin/enquiries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ContactEnquiryController::index
 * @see app/Http/Controllers/Admin/ContactEnquiryController.php:17
 * @route '/z-admin/enquiries'
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
const enquiries = {
    index: Object.assign(index, index),
}

export default enquiries