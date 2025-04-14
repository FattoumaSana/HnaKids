"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "", // Déplacement de phone pour correspondre à l'ordre souhaité
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const endpoint = isLogin ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/register";
    const userData = isLogin
      ? { email: formData.email, password: formData.password }
      : { username: formData.username, email: formData.email, phone: formData.phone, password: formData.password }; // Mise à jour de l'ordre des champs pour l'inscription

    try {
      const response = await axios.post(endpoint, userData);
      localStorage.setItem("token", response.data.token);
      if (!isLogin) {
        setSuccessMessage("Votre compte a été créé avec succès ! Vous allez être redirigé...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        window.location.reload(); // Force le rechargement de la page après la connexion
      }
      console.log(response.data.msg);
    } catch (err) {
      setError(err.response?.data?.msg || "Une erreur est survenue.");
      console.error("Erreur d'authentification :", err);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccessMessage("");
  };

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

          {!isLogin && (
            <>
              <div>
                <label htmlFor="username" className="block mb-1 font-medium">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre nom d'utilisateur"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Numéro de téléphone
                </label>
                <input
                  type="text" // ou 'tel'
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required // Si vous voulez qu'il soit obligatoire
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Confirmez votre mot de passe"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Champs de connexion (toujours présents) */}
          {isLogin && (
            <>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember">Se souvenir de moi</label>
                </div>
                <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
            </>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

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
  );
};

export default Login;