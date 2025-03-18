<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;

class RedirectLegacy
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $routeName = $request->route()->getName(); // Obtener el nombre de la ruta
        Log::info('Valor de la variable:', ['variable' => $routeName]);
        // Verifica si la vista correspondiente a la ruta existe en Inertia
        if (!view()->exists("Pages.{$routeName}")) {
            // Si la vista no existe, redirige al sistema antiguo
            return redirect()->away(env('LEGACY_SYSTEM_URL') . $request->getPathInfo());
        }

        return $next($request);
    }
}
