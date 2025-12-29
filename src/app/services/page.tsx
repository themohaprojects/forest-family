import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const services = [
    {
        id: 'abattage',
        title: "Abattage & Démontage",
        description: "Intervention maîtrisée pour la suppression d'arbres dangereux, gênants ou en fin de vie. Nous maîtrisons les techniques d'abattage direct et de démontage par rétention pour les zones contraintes.",
        features: ["Abattage directionnel", "Démontage avec rétention", "Sécurisation de zone", "Évacuation des déchets verts"],
        image: "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: 'elagage',
        title: "Élagage & Soin des Arbres",
        description: "Taille raisonnée respectant la physiologie de l'arbre. Que ce soit pour la sécurité, l'esthétique ou la santé de vos arbres, nous intervenons avec soin.",
        features: ["Taille douce", "Taille sanitaire (bois mort)", "Taille d'éclaircie", "Haubanage"],
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: 'debroussaillage',
        title: "Débroussaillage & Nettoyage",
        description: "Remise en état de terrains, création de pare-feu réglementaires et entretien de sous-bois pour prévenir les risques d'incendie et valoriser votre propriété.",
        features: ["Broyage forestier", "Défrichage", "Création de pare-feu", "Entretien de clôtures"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: 'gestion',
        title: "Gestion & Conseil Forestier",
        description: "Accompagnement sur le long terme pour la valorisation de votre patrimoine forestier. Nous vous aidons à prendre les bonnes décisions pour l'avenir de vos bois.",
        features: ["Plan de gestion simple", "Estimation de valeur", "Reboisement", "Diagnostic phytosanitaire"],
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">

            {/* Header */}
            <div className="bg-primary pt-24 pb-16 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                    Des solutions professionnelles adaptées à chaque besoin forestier, pour les particuliers, les entreprises et les collectivités.
                </p>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
                {services.map((service, index) => (
                    <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                                    style={{ backgroundImage: `url("${service.image}")` }}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-accent/30 p-1 rounded-full text-primary">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/devis"
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                            >
                                Demander une intervention <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                    </div>
                ))}
            </div>

            {/* Pricing CTA */}
            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Besoin d'un devis personnalisé ?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Chaque terrain et chaque arbre est unique. Pour obtenir une estimation précise, décrivez-nous votre projet ou contactez-nous directement.
                    </p>
                    <Link
                        href="/devis"
                        className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary-light transition-colors shadow-lg inline-block"
                    >
                        Obtenir mon devis gratuit
                    </Link>
                </div>
            </div>
        </div>
    );
}
