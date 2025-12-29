'use client';

import { useState } from 'react';
import { submitDevis } from './actions';
import { Loader2, CheckCircle, Send, Trees, MapPin, User, Mail, Phone, Ruler } from 'lucide-react';

import Link from 'next/link';

export default function DevisPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const result = await submitDevis(formData);

        setIsSubmitting(false);
        if (result.success) {
            setSuccess(true);
        }
    }

    if (success) {
        return (
            <div className="min-h-screen bg-muted flex items-center justify-center p-4">
                <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-xl text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Demande reçue !</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Merci de nous avoir confié votre projet. Notre équipe va étudier vos besoins et vous recontactera sous 48h ouvrées.
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-light transition-colors">
                            Retour à l'accueil
                        </Link>
                        <button onClick={() => setSuccess(false)} className="text-gray-500 hover:text-gray-700 font-medium py-2">
                            Envoyer une autre demande
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Demander un Devis Gratuit</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Remplissez ce formulaire pour nous donner un premier aperçu de votre chantier. C'est sans engagement.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-primary p-6 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-xl font-bold">Formulaire de demande</h3>
                            <p className="text-primary-light/80 text-sm">Tous les champs marqués d'un * sont requis</p>
                        </div>
                        <Trees className="h-10 w-10 text-primary-light/50 hidden sm:block" />
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Vos Coordonnées</h3>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input required name="name" type="text" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Jean Dupont" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input required name="phone" type="tel" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="06 00 00 00 00" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input required name="email" type="email" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="jean@exemple.fr" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse du chantier *</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <textarea required name="address" rows={3} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Adresse complète de l'intervention..." />
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Détails du Chantier</h3>

                            <div>
                                <label htmlFor="terrainSize" className="block text-sm font-medium text-gray-700 mb-1">Taille approximative du terrain (m²) *</label>
                                <div className="relative">
                                    <Ruler className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input required name="terrainSize" type="number" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ex: 500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="treeCount" className="block text-sm font-medium text-gray-700 mb-1">Nb d'arbres *</label>
                                    <input required name="treeCount" type="number" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="0" />
                                </div>
                                <div>
                                    <label htmlFor="treeHeight" className="block text-sm font-medium text-gray-700 mb-1">Hauteur max *</label>
                                    <select required name="treeHeight" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                                        <option value="">Sélectionner</option>
                                        <option value="small">Moins de 5m</option>
                                        <option value="medium">5 à 10m</option>
                                        <option value="large">10 à 20m</option>
                                        <option value="xl">Plus de 20m</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Précisions supplémentaires</label>
                                <textarea name="message" rows={4} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Accès difficile, présence de lignes électriques, contraintes particulières..." />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white text-lg font-bold py-4 rounded-xl hover:bg-primary-light transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-6 w-6 animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        Envoyer ma demande
                                        <Send className="h-5 w-5" />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Vos données sont confidentielles et servent uniquement à établir votre devis.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
