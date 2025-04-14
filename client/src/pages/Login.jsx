"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{isLogin ? "Connexion" : "Créer un compte"}</h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex border-b mb-6">
          <button
            className={`pb-2 px-4 ${isLogin ? "border-b-2 border-gray-800 font-medium" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Connexion
          </button>
          <button
            className={`pb-2 px-4 ${!isLogin ? "border-b-2 border-gray-800 font-medium" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Inscription
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre nom"
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Votre email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Votre mot de passe"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Confirmez votre mot de passe"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Se souvenir de moi</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            {isLogin ? "Se connecter" : "Créer un compte"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}{" "}
            <button onClick={toggleForm} className="text-gray-800 dark:text-gray-300 font-medium hover:underline">
              {isLogin ? "S'inscrire" : "Se connecter"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
