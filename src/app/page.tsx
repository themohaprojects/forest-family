import Link from 'next/link';
import { ArrowRight, CheckCircle2, TreePine, Axe, Tractor } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Gardiens de votre <span className="text-primary-light">patrimoine forestier</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Expertise professionnelle en abattage, élagage et gestion durable de vos espaces verts à Toulouse et en Occitanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Domaines d'Intervention</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Nous intervenons avec du matériel adapté pour tous types de travaux forestiers, du jardin privé aux grandes parcelles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Axe className="h-10 w-10 text-secondary" />,
                title: "Abattage & Élagage",
                desc: "Abattage directionnel, démontage délicat, taille de formation et sanitaire. Sécurité garantie."
              },
              {
                icon: <Tractor className="h-10 w-10 text-secondary" />,
                title: "Débroussaillage",
                desc: "Entretien de sous-bois, broyage de végétaux, création de pare-feu et nettoyage de terrains."
              },
              {
                icon: <TreePine className="h-10 w-10 text-secondary" />,
                title: "Gestion Forestière",
                desc: "Conseil en reboisement, plans de gestion simple, estimation de bois sur pied."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir Forest Family ?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Nous allions techniques modernes et respect des traditions forestières pour garantir la pérennité de votre patrimoine naturel.
              </p>

              <div className="space-y-4">
                {[
                  "Intervention rapide en Haute-Garonne",
                  "Devis gratuit sous 48h",
                  "Respect de l'environnement et biodiversité",
                  "Matériel professionnel haute performance",
                  "Assurance responsabilité civile professionnelle"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary-light shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/a-propos" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block">
                  Mieux nous connaître
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Grid or Single Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&q=80&w=2000")' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-serif italic text-xl">"La forêt est un héritage que nous empruntons à nos enfants."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vous avez un projet forestier ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Que ce soit pour un simple élagage ou une gestion complète de parcelle, nous sommes à votre écoute pour étudier vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
              Nous contacter
            </Link>
            <Link href="/devis" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-colors shadow-lg">
              Obtenir mon estimation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
