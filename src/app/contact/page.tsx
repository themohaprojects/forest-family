import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-muted min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
                    <p className="text-lg text-gray-600">
                        Une question ? Une urgence ? Nous sommes joignables toute la semaine.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Info Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 h-full">
                        <h2 className="text-2xl font-bold mb-8 text-primary">Nos Coordonnées</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-accent/20 p-3 rounded-lg text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                                    <p className="text-gray-600 mt-1">
                                        129 B Avenue des États-Unis<br />
                                        31200 Toulouse, France
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-accent/20 p-3 rounded-lg text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href="tel:0700000000" className="hover:text-primary transition-colors font-medium">
                                            07 00 00 00 00
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-accent/20 p-3 rounded-lg text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href="mailto:contact@forest-family.fr" className="hover:text-primary transition-colors">
                                            contact@forest-family.fr
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-accent/20 p-3 rounded-lg text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Horaires</h3>
                                    <p className="text-gray-600 mt-1">
                                        Lundi - Vendredi : 8h00 - 18h00<br />
                                        Samedi : Sur rendez-vous<br />
                                        Dimanche : Fermé
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-semibold mb-2">Besoin d'une estimation chiffrée ?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Pour une réponse rapide et précise, privilégiez notre formulaire de devis en ligne.
                            </p>
                            <Link href="/devis" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                                Accéder au formulaire de devis
                            </Link>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-[500px] lg:h-auto min-h-[500px] relative">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, minHeight: '100%' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.894793234!2d1.4285!3d43.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6f5!2s129+Av.+des+%C3%89tats+Unis%2C+31200+Toulouse!5e0!3m2!1sfr!2sfr!4v1"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}
