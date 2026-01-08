import Link from 'next/link';
import { TreePine, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <TreePine className="h-8 w-8 text-secondary-light" />
                            <span className="font-bold text-2xl tracking-tight">FOREST FAMILY</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Votre partenaire de confiance pour l'exploitation et la gestion forestière durable.
                            Expertise, sécurité et respect de l'environnement depuis 2022.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary-light">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Nos Services</Link></li>
                            <li><Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</Link></li>
                            <li><Link href="/devis" className="text-gray-300 hover:text-white transition-colors">Demander un devis</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary-light">Coordonnées</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-secondary-light shrink-0 mt-0.5" />
                                <span>129 B Avenue des États-Unis<br />31200 Toulouse</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-secondary-light shrink-0" />
                                <a href="tel:0746252428" className="hover:text-white transition-colors">07 46 25 24 28</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-secondary-light shrink-0" />
                                <a href="mailto:ikarroumi@protonmail.com" className="hover:text-white transition-colors">ikarroumi@protonmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-secondary-light">Suivez-nous</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">
                            © 2024 Forest Family SAS. <br />Tous droits réservés.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Mentions Légales</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Politique de Confidentialité</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">CGV</Link>
                    </div>
                    <span>Conçu avec passion pour la nature</span>
                </div>
            </div>
        </footer>
    );
}
