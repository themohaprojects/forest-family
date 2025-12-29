import { Shield, Leaf, HeartHandshake, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* Hero */}
            <section className="relative py-20 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Forest Family</h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-200">
                        Une entreprise jeune et dynamique, née de la passion pour la forêt et du respect de la nature.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pl-4 border-l-4 border-secondary">
                            Notre Histoire
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Fondée en <strong>2022</strong> et implantée à <strong>Toulouse</strong>, Forest Family (SAS) est née d'une volonté simple : proposer des services d'entretien forestier qui allient rigueur professionnelle et conscience écologique.
                            </p>
                            <p>
                                Face aux défis climatiques et à la nécessité d'entretenir nos paysages pour prévenir les risques (incendies, chutes d'arbres), nous avons constitué une équipe qualifiée, capable d'intervenir sur tous types de terrains, des jardins privés aux parcelles forestières complexes.
                            </p>
                            <p>
                                Nous opérons principalement en Haute-Garonne et dans les départements limitrophes, avec toujours le même objectif : la satisfaction client et le travail bien fait.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-primary font-semibold">
                            <MapPin className="h-5 w-5" />
                            <span>Basés au 129 B Avenue des États-Unis, 31200 Toulouse</span>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop")' }}
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
                        <p className="text-gray-600">Les piliers de notre engagement au quotidien.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Shield className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sécurité Absolue</h3>
                            <p className="text-gray-600">
                                L'abattage est un métier à risques. Nous ne faisons aucun compromis sur les équipements de protection et les protocoles de sécurité pour nos équipes et vos biens.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Leaf className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Respect du Vivant</h3>
                            <p className="text-gray-600">
                                Nous préconisons toujours les solutions les plus douces pour l'arbre quand c'est possible. Nous valorisons les déchets verts et utilisons des huiles biodégradables.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-primary text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <HeartHandshake className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Proximité & Service</h3>
                            <p className="text-gray-600">
                                En tant qu'entreprise locale, nous privilégions la relation humaine. Conseils personnalisés, réactivité et tarifs transparents sont notre marque de fabrique.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center px-4">
                <h2 className="text-3xl font-bold mb-8">Envie de travailler avec nous ?</h2>
                <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-colors shadow-lg inline-block"
                >
                    Contactez notre équipe
                </Link>
            </section>
        </div>
    );
}
