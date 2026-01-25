"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "@/context/ContentContext";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  FolderOpen,
  Phone,
  Settings,
  LogOut,
  Save,
  RotateCcw,
  Menu,
  X,
  Plus,
  Trash2,
  Edit2,
  Eye,
  Lock,
  Heart,
  Shirt,
  Home,
  Image,
  Camera,
} from "lucide-react";

// Tabs disponibles
const tabs = [
  { id: "general", label: "General", icon: LayoutDashboard },
  { id: "welcome", label: "Bienvenida", icon: Home },
  { id: "hero", label: "Hero", icon: FileText },
  { id: "salud", label: "Salud", icon: Heart },
  { id: "textil", label: "Textil", icon: Shirt },
  { id: "gallery", label: "Galeria Textil", icon: Camera },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "contact", label: "Contacto", icon: Phone },
  { id: "settings", label: "Ajustes", icon: Settings },
];

export default function AdminPage() {
  const {
    content,
    isAuthenticated,
    login,
    logout,
    updateContent,
    updateHero,
    updateSaludHero,
    updateTextilHero,
    updateContact,
    updateWelcome,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    resetToDefault,
  } = useContent();

  const [activeTab, setActiveTab] = useState("general");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [saveMessage, setSaveMessage] = useState("");

  // Login state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setLoginError("Credenciales incorrectas");
    }
  };

  const showSaveMessage = () => {
    setSaveMessage("Cambios guardados");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Restaurar todo el contenido a los valores por defecto?")) {
      resetToDefault();
      showSaveMessage();
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="admin-card p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Panel de Administracion</h1>
              <p className="text-gray-400 mt-2">DMC Projects</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="admin-input w-full"
                  placeholder="Usuario"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Contrasena</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="admin-input w-full"
                  placeholder="Contrasena"
                />
              </div>

              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}

              <button type="submit" className="admin-btn w-full">
                Iniciar Sesion
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside
        className={`admin-sidebar fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-white">DMC Admin</h2>
              <p className="text-xs text-gray-500">Panel de Control</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-brand text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} />
            Cerrar Sesion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-white">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {saveMessage && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-500 text-sm"
                >
                  {saveMessage}
                </motion.span>
              )}
              <a
                href="/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <Eye size={18} />
                Ver Sitio
              </a>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "general" && (
                <GeneralTab
                  content={content}
                  updateContent={updateContent}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "welcome" && (
                <WelcomeTab
                  content={content}
                  updateWelcome={updateWelcome}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "hero" && (
                <HeroTab
                  content={content}
                  updateHero={updateHero}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "salud" && (
                <SaludTab
                  content={content}
                  updateSaludHero={updateSaludHero}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "textil" && (
                <TextilTab
                  content={content}
                  updateTextilHero={updateTextilHero}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "gallery" && (
                <GalleryTab
                  content={content}
                  addGalleryItem={addGalleryItem}
                  updateGalleryItem={updateGalleryItem}
                  deleteGalleryItem={deleteGalleryItem}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "contact" && (
                <ContactTab
                  content={content}
                  updateContact={updateContact}
                  onSave={showSaveMessage}
                />
              )}
              {activeTab === "settings" && (
                <SettingsTab onReset={handleReset} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// General Tab
function GeneralTab({ content, updateContent, onSave }: any) {
  const [siteName, setSiteName] = useState(content.siteName);
  const [siteTagline, setSiteTagline] = useState(content.siteTagline);

  const handleSave = () => {
    updateContent("siteName", siteName);
    updateContent("siteTagline", siteTagline);
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Informacion General</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nombre del Sitio</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Tagline</label>
            <input
              type="text"
              value={siteTagline}
              onChange={(e) => setSiteTagline(e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <button onClick={handleSave} className="admin-btn">
            <Save size={18} className="inline mr-2" />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}

// Welcome Tab
function WelcomeTab({ content, updateWelcome, onSave }: any) {
  const [welcome, setWelcome] = useState(content.welcome);

  const handleSave = () => {
    updateWelcome(welcome);
    onSave();
  };

  const updateSaludCard = (field: string, value: string) => {
    setWelcome({
      ...welcome,
      saludCard: { ...welcome.saludCard, [field]: value },
    });
  };

  const updateTextilCard = (field: string, value: string) => {
    setWelcome({
      ...welcome,
      textilCard: { ...welcome.textilCard, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      {/* Seccion Principal */}
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Pagina de Bienvenida</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Principal</label>
            <input
              type="text"
              value={welcome.title}
              onChange={(e) => setWelcome({ ...welcome, title: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={welcome.subtitle}
              onChange={(e) => setWelcome({ ...welcome, subtitle: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={welcome.description}
              onChange={(e) => setWelcome({ ...welcome, description: e.target.value })}
              className="admin-input w-full h-24 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Imagen de Fondo (URL)</label>
            <input
              type="url"
              value={welcome.backgroundImage}
              onChange={(e) => setWelcome({ ...welcome, backgroundImage: e.target.value })}
              className="admin-input w-full"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      {/* Tarjeta Salud Digital */}
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Heart className="w-5 h-5 text-green-500" />
          Tarjeta Salud Digital
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo</label>
            <input
              type="text"
              value={welcome.saludCard.title}
              onChange={(e) => updateSaludCard("title", e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={welcome.saludCard.subtitle}
              onChange={(e) => updateSaludCard("subtitle", e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={welcome.saludCard.description}
              onChange={(e) => updateSaludCard("description", e.target.value)}
              className="admin-input w-full h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Imagen (URL)</label>
            <input
              type="url"
              value={welcome.saludCard.image}
              onChange={(e) => updateSaludCard("image", e.target.value)}
              className="admin-input w-full"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Texto del Boton</label>
            <input
              type="text"
              value={welcome.saludCard.buttonText}
              onChange={(e) => updateSaludCard("buttonText", e.target.value)}
              className="admin-input w-full"
            />
          </div>
        </div>
      </div>

      {/* Tarjeta Textil */}
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Shirt className="w-5 h-5 text-[#ff0040]" />
          Tarjeta Personalizacion Textil
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo</label>
            <input
              type="text"
              value={welcome.textilCard.title}
              onChange={(e) => updateTextilCard("title", e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={welcome.textilCard.subtitle}
              onChange={(e) => updateTextilCard("subtitle", e.target.value)}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={welcome.textilCard.description}
              onChange={(e) => updateTextilCard("description", e.target.value)}
              className="admin-input w-full h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Imagen (URL)</label>
            <input
              type="url"
              value={welcome.textilCard.image}
              onChange={(e) => updateTextilCard("image", e.target.value)}
              className="admin-input w-full"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Texto del Boton</label>
            <input
              type="text"
              value={welcome.textilCard.buttonText}
              onChange={(e) => updateTextilCard("buttonText", e.target.value)}
              className="admin-input w-full"
            />
          </div>
        </div>
      </div>

      <button onClick={handleSave} className="admin-btn">
        <Save size={18} className="inline mr-2" />
        Guardar Cambios
      </button>
    </div>
  );
}

// Hero Tab
function HeroTab({ content, updateHero, onSave }: any) {
  const [hero, setHero] = useState(content.hero);

  const handleSave = () => {
    updateHero(hero);
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Hero Principal (Home)</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 1</label>
            <input
              type="text"
              value={hero.title1}
              onChange={(e) => setHero({ ...hero, title1: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 2</label>
            <input
              type="text"
              value={hero.title2}
              onChange={(e) => setHero({ ...hero, title2: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={hero.description}
              onChange={(e) => setHero({ ...hero, description: e.target.value })}
              className="admin-input w-full h-24 resize-none"
            />
          </div>

          <button onClick={handleSave} className="admin-btn">
            <Save size={18} className="inline mr-2" />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}

// Salud Tab
function SaludTab({ content, updateSaludHero, onSave }: any) {
  const [hero, setHero] = useState(content.saludHero);

  const handleSave = () => {
    updateSaludHero(hero);
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Seccion Salud Digital</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 1</label>
            <input
              type="text"
              value={hero.title1}
              onChange={(e) => setHero({ ...hero, title1: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 2</label>
            <input
              type="text"
              value={hero.title2}
              onChange={(e) => setHero({ ...hero, title2: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={hero.description}
              onChange={(e) => setHero({ ...hero, description: e.target.value })}
              className="admin-input w-full h-24 resize-none"
            />
          </div>

          <button onClick={handleSave} className="admin-btn">
            <Save size={18} className="inline mr-2" />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}

// Textil Tab
function TextilTab({ content, updateTextilHero, onSave }: any) {
  const [hero, setHero] = useState(content.textilHero);

  const handleSave = () => {
    updateTextilHero(hero);
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Seccion Textil DTF</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 1</label>
            <input
              type="text"
              value={hero.title1}
              onChange={(e) => setHero({ ...hero, title1: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Titulo Linea 2</label>
            <input
              type="text"
              value={hero.title2}
              onChange={(e) => setHero({ ...hero, title2: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Subtitulo</label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion</label>
            <textarea
              value={hero.description}
              onChange={(e) => setHero({ ...hero, description: e.target.value })}
              className="admin-input w-full h-24 resize-none"
            />
          </div>

          <button onClick={handleSave} className="admin-btn">
            <Save size={18} className="inline mr-2" />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}

// Contact Tab
function ContactTab({ content, updateContact, onSave }: any) {
  const [contact, setContact] = useState(content.contact);

  const handleSave = () => {
    updateContact(contact);
    onSave();
  };

  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Informacion de Contacto</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Telefono</label>
            <input
              type="text"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">WhatsApp (solo numeros)</label>
            <input
              type="text"
              value={contact.whatsapp}
              onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
              className="admin-input w-full"
              placeholder="56912345678"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Direccion</label>
            <input
              type="text"
              value={contact.address}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-2">Horario</label>
            <input
              type="text"
              value={contact.schedule}
              onChange={(e) => setContact({ ...contact, schedule: e.target.value })}
              className="admin-input w-full"
            />
          </div>
        </div>

        <h4 className="text-md font-semibold text-white mt-8 mb-4">Redes Sociales</h4>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Instagram URL</label>
            <input
              type="url"
              value={contact.instagram}
              onChange={(e) => setContact({ ...contact, instagram: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Facebook URL</label>
            <input
              type="url"
              value={contact.facebook}
              onChange={(e) => setContact({ ...contact, facebook: e.target.value })}
              className="admin-input w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">LinkedIn URL</label>
            <input
              type="url"
              value={contact.linkedin}
              onChange={(e) => setContact({ ...contact, linkedin: e.target.value })}
              className="admin-input w-full"
            />
          </div>
        </div>

        <button onClick={handleSave} className="admin-btn mt-6">
          <Save size={18} className="inline mr-2" />
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}

// Settings Tab
function SettingsTab({ onReset }: any) {
  return (
    <div className="space-y-6">
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Ajustes del Sistema</h3>

        <div className="p-4 border border-white/10 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Restaurar Valores por Defecto</h4>
              <p className="text-sm text-gray-400 mt-1">
                Esto restaurara todo el contenido a los valores originales. Esta accion no se puede deshacer.
              </p>
            </div>
            <button
              onClick={onReset}
              className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Restaurar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Gallery Tab
function GalleryTab({ content, addGalleryItem, updateGalleryItem, deleteGalleryItem, onSave }: any) {
  const [newUrl, setNewUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editUrl, setEditUrl] = useState("");
  const [editCaption, setEditCaption] = useState("");

  const handleAdd = () => {
    if (newUrl.trim()) {
      addGalleryItem({ url: newUrl.trim(), caption: newCaption.trim() || "Sin descripcion" });
      setNewUrl("");
      setNewCaption("");
      onSave();
    }
  };

  const handleStartEdit = (item: any) => {
    setEditingId(item.id);
    setEditUrl(item.url);
    setEditCaption(item.caption);
  };

  const handleSaveEdit = () => {
    if (editingId && editUrl.trim()) {
      updateGalleryItem(editingId, { url: editUrl.trim(), caption: editCaption.trim() });
      setEditingId(null);
      onSave();
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Eliminar esta imagen de la galeria?")) {
      deleteGalleryItem(id);
      onSave();
    }
  };

  return (
    <div className="space-y-6">
      {/* Agregar nueva imagen */}
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#ff0040]" />
          Agregar Imagen a la Galeria
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">URL de la Imagen</label>
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="admin-input w-full"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Descripcion / Caption</label>
            <input
              type="text"
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
              className="admin-input w-full"
              placeholder="Polera Streetwear Personalizada"
            />
          </div>

          <button onClick={handleAdd} className="admin-btn">
            <Plus size={18} className="inline mr-2" />
            Agregar a Galeria
          </button>
        </div>
      </div>

      {/* Lista de imagenes */}
      <div className="admin-card p-6">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#ff0040]" />
          Imagenes de la Galeria ({content.textilGallery?.length || 0})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.textilGallery?.map((item: any) => (
            <div
              key={item.id}
              className="relative group bg-white/5 rounded-lg overflow-hidden border border-white/10"
            >
              {editingId === item.id ? (
                /* Modo edicion */
                <div className="p-4 space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">URL</label>
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="admin-input w-full text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Caption</label>
                    <input
                      type="text"
                      value={editCaption}
                      onChange={(e) => setEditCaption(e.target.value)}
                      className="admin-input w-full text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="flex-1 px-3 py-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors text-sm"
                    >
                      <Save size={14} className="inline mr-1" />
                      Guardar
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 px-3 py-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 transition-colors text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                /* Vista normal */
                <>
                  <div className="aspect-video relative">
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Error+de+imagen';
                      }}
                    />
                    {/* Overlay con acciones */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleStartEdit(item)}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ff0040] transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-white text-sm font-medium truncate">{item.caption}</p>
                    <p className="text-gray-500 text-xs truncate mt-1">{item.url}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {(!content.textilGallery || content.textilGallery.length === 0) && (
          <div className="text-center py-12 text-gray-500">
            <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No hay imagenes en la galeria</p>
            <p className="text-sm mt-2">Agrega tu primera imagen arriba</p>
          </div>
        )}
      </div>

      {/* Nota informativa */}
      <div className="admin-card p-4 border-[#ff0040]/30">
        <p className="text-sm text-gray-400">
          <strong className="text-[#ff0040]">Tip:</strong> Puedes usar URLs de servicios como Unsplash, Imgur, o cualquier URL de imagen publica.
          Las imagenes se mostraran en la galeria de la seccion Textil.
        </p>
      </div>
    </div>
  );
}
