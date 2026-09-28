<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! Auth::check()) {
            return redirect()->route('admin.login')->with('error', 'Please log in to access the administration panel.');
        }

        if (Auth::user()->role !== 'admin') {
            return redirect()->route('customer.dashboard')->with('error', 'Access restricted: You have been redirected to your customer portal.');
        }

        return $next($request);
    }
}
