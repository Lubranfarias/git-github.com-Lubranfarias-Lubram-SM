import { useEffect } from 'react';
import { Code2, Target, Wrench, TrendingUp, Building2, Stethoscope, GraduationCap, Users, FileText, Database, Zap, Globe, Cog, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Lubram Smart Solutions
            </span>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/20 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h1 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Soluções Inteligentes em TI
                </h1>
                <p className="text-xl text-blue-100/80 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Transformamos desafios tecnológicos em oportunidades de crescimento para o seu negócio
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                    Automatização
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                    Desenvolvimento
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                    Consultoria
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:rotate-12 transition-transform duration-500">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Parceria de Sucesso
                </h3>
                <p className="text-purple-100/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Trabalhamos lado a lado com você para entender e resolver as necessidades específicas do seu negócio
                </p>
              </div>
            </div>
          </div>

          {/* Objetivos Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nossos Objetivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-blue-500/50">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Automatizar Tarefas</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Elimine trabalhos repetitivos e ganhe tempo para o que realmente importa
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-600/10 to-cyan-800/10 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-cyan-500/50">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Criar Sistemas</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Desenvolvemos softwares personalizados que atendem suas necessidades específicas
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-purple-500/50">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Resolver Dores</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Identificamos e solucionamos problemas específicos do seu negócio
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-green-500/50">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Melhorar Sistemas</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Otimizamos e modernizamos sistemas existentes para máxima eficiência
                </p>
              </div>
            </div>
          </div>

          {/* Serviços Section - Bento Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
              {/* Large Card - Sites */}
              <div className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/50 group-hover:rotate-12 transition-transform duration-500">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Desenvolvimento de Sites
                  </h3>
                  <p className="text-indigo-100/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Criamos sites modernos, responsivos e otimizados que representam sua marca e convertem visitantes em clientes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Landing Pages</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">E-commerce</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Portfólios</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Institucionais</span>
                  </div>
                </div>
              </div>

              {/* Users Management */}
              <div className="bg-gradient-to-br from-blue-600/15 to-blue-800/15 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-blue-500/50">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Controle de Usuários
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Gestão completa de funcionários e permissões
                </p>
              </div>

              {/* Reports */}
              <div className="bg-gradient-to-br from-cyan-600/15 to-cyan-800/15 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-cyan-500/50">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Emissão de Relatórios
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Dashboards e relatórios personalizados
                </p>
              </div>

              {/* Data Organization */}
              <div className="bg-gradient-to-br from-purple-600/15 to-purple-800/15 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-purple-500/50">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Organização de Dados
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Estruture e centralize suas informações
                </p>
              </div>

              {/* Automation */}
              <div className="bg-gradient-to-br from-green-600/15 to-green-800/15 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-green-500/50">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Automatizações
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Processos automáticos que economizam tempo
                </p>
              </div>

              {/* Custom Solutions */}
              <div className="md:col-span-2 bg-gradient-to-br from-orange-600/15 to-red-600/15 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-orange-500/50">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Soluções Sob Medida
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Desenvolvemos sistemas personalizados que se adaptam perfeitamente ao seu fluxo de trabalho e necessidades específicas
                </p>
              </div>

              {/* Maintenance */}
              <div className="bg-gradient-to-br from-teal-600/15 to-teal-800/15 backdrop-blur-xl rounded-2xl p-6 border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-teal-500/50">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Manutenção e Melhorias
                </h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Suporte contínuo e evolutivo
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Atendemos Empresas de Todos os Segmentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-600/15 to-orange-600/15 backdrop-blur-xl rounded-2xl p-8 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 shadow-lg group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-amber-500/50 group-hover:rotate-12 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Escritórios</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Gestão de documentos, controle de clientes e automatização de processos administrativos
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-600/15 to-pink-600/15 backdrop-blur-xl rounded-2xl p-8 border border-rose-500/20 hover:border-rose-400/50 transition-all duration-300 hover:scale-105 shadow-lg group">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-rose-500/50 group-hover:rotate-12 transition-transform duration-300">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Clínicas</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Agendamentos, prontuários eletrônicos e gestão completa de pacientes
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-600/15 to-purple-600/15 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 shadow-lg group">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-violet-500/50 group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Escolas</h3>
                <p className="text-sm text-slate-300/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sistema acadêmico, controle de matrículas e comunicação com responsáveis
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Pronto Para Transformar Seu Negócio?
              </h2>
              <p className="text-xl text-slate-200/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com tecnologia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  Solicitar Orçamento
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  Saber Mais
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-12 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 Lubram Smart Solutions. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
