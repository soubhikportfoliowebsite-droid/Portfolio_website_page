import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Target,
  Zap,
  ShieldCheck,
  TrendingUp,
  Settings,
  Check,
} from "lucide-react";

// Custom LinkedIn Square Icon Component (matches official branding)
const LinkedInSquareIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  // Determine if we should fix the height for the Home page
  const isHome = activeTab === "home";

  return (
    <div
      className={`flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 ${
        isHome ? "h-screen overflow-hidden" : "min-h-screen"
      }`}
    >
      {/* Navigation */}
      <nav className="flex-none bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                CA SAUBHIK SAMANTA
              </span>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest leading-none">
                Partner, DPSV Associate LLP
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "experience", "education", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize text-sm font-bold tracking-wide transition-all duration-200 ${
                    activeTab === tab
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-slate-500 hover:text-indigo-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-6 px-6 space-y-4 shadow-xl">
            {["home", "experience", "education", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left capitalize text-lg font-semibold text-slate-700 hover:text-indigo-600"
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area - Grows to fill space */}
      <main
        className={`flex-grow flex flex-col ${
          isHome ? "justify-center overflow-hidden" : "pt-4"
        }`}
      >
        {renderContent()}
      </main>

      {/* Footer - Pinned to bottom */}
      <footer className="flex-none bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>
            © {new Date().getFullYear()} SAUBHIK SAMANTA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-default transition-colors">
              Integrity
            </span>
            <span className="hover:text-slate-300 cursor-default transition-colors">
              Excellence
            </span>
            <span className="hover:text-slate-300 cursor-default transition-colors">
              Trust
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- HOME SECTION ---
const HomeSection = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "soubhik.samanta@dpsv.com";
  const linkedInUrl = "https://www.linkedin.com/in/soubhik-samanta";

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (error) {
    console.error("Clipboard copy failed:", error);
  }
}

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
          <div className="space-y-3">
            <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase">
              Senior Finance & Audit Professional
            </h2>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              CA Saubhik Samanta
            </h1>
            <p className="text-xl font-medium text-slate-600">
              Designated partner of DPSV Associate LLP
            </p>
          </div>

          <div className="space-y-5 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            <p>
              A senior finance, audit, and business transformation professional
              with deep experience across government undertakings and private
              enterprises.
            </p>
            <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border-l-8 border-indigo-500 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={60} />
              </div>
              <p className="text-lg italic font-light relative z-10 leading-relaxed">
                "Known for being trusted with complex, sensitive, and
                unstructured environments and converting them into controlled,
                compliant, scalable systems."
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-3 px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg min-w-[200px] justify-center text-white ${
                copied
                  ? "bg-emerald-600 scale-105"
                  : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
              }`}
            >
              {copied ? <Check size={20} /> : <Mail size={20} />}
              <span>{copied ? "Email Copied!" : "Contact via Email"}</span>
            </button>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#005c8c] transition-all shadow-lg active:scale-95 min-w-[200px] justify-center"
            >
              <LinkedInSquareIcon className="w-5 h-5" />
              <span>LinkedIn Profile</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-[340px]">
            <div className="absolute -inset-3 bg-indigo-100 rounded-[2.5rem] -rotate-3"></div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="CA Soubhik Samanta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- EXPERIENCE SECTION ---
const ExperienceSection = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
        Career Experience
      </h2>
      <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
    </div>

    {/* Leadership Role Header */}
    <div className="mb-20 bg-white p-10 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-200/50">
      <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
        <div className="bg-indigo-600 p-5 rounded-2xl shadow-indigo-200 shadow-lg">
          <Briefcase className="text-white" size={40} />
        </div>
        <div>
          <h3 className="text-3xl font-black text-slate-900 mb-1 leading-tight">
            Long-Term Leadership Role
          </h3>
          <p className="text-xl font-bold text-indigo-600 mb-2">
            Audit, Accounting, Costing & Enterprise Transformation
          </p>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <Award size={18} className="text-amber-500" /> 20+ Years Senior
            Leadership
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 underline decoration-indigo-500 decoration-4 underline-offset-8">
            Core Mandate
          </h4>
          <p className="mb-6 font-semibold text-slate-700 text-lg">
            Repeatedly engaged during critical phases where organizations faced:
          </p>
          <ul className="space-y-4">
            {[
              "Regulatory transitions",
              "Systemic weaknesses",
              "Audit and compliance pressure",
              "Rapid scale without process maturity",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-slate-700 font-medium"
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center p-8 bg-indigo-900 rounded-2xl shadow-xl">
          <p className="text-white text-2xl font-light italic leading-relaxed text-center">
            "Accountable for end-to-end stabilization, system design, and
            institutionalization."
          </p>
        </div>
      </div>
    </div>

    {/* FLAGSHIP ASSIGNMENT 1: MPJ JEWELLERS */}
    <div className="space-y-12 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-slate-900 pb-8">
        <div>
          <h3 className="text-4xl font-black text-slate-900 mb-2">
            FLAGSHIP ASSIGNMENT 1
          </h3>
          <p className="text-2xl font-bold text-indigo-700">
            MPJ Jewellers (Heritage Jewellery Group – Founded 1945)
          </p>
        </div>
        <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest">
          PRIVATE SECTOR
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-slate-100 p-8 rounded-3xl">
          <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tighter">
            Initial Situation
          </h4>
          <ul className="space-y-4 font-bold text-slate-600">
            <li className="flex gap-2">
              <span>•</span> Family-run enterprise
            </li>
            <li className="flex gap-2">
              <span>•</span> Turnover below ₹200 crore
            </li>
            <li className="flex gap-2">
              <span>•</span> Weak systems and fragmented controls
            </li>
            <li className="flex gap-2">
              <span>•</span> No branch-wise performance visibility
            </li>
            <li className="flex gap-2">
              <span>•</span> Heavy dependence on individuals
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 bg-indigo-600 p-10 rounded-3xl text-white shadow-2xl flex items-center">
          <div>
            <h4 className="text-3xl font-black mb-4 uppercase">The Mandate</h4>
            <p className="text-2xl font-light italic leading-relaxed">
              "Transform the organization into a professional, system-driven
              enterprise and scale sustainably."
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "1. Accounting & Control Redesign",
            impact:
              "Eliminated end-year Tally dependency. Designed SOP-based branch accounting. Enabled branch-wise P&L and performance analytics.",
            highlight:
              "Management gained real-time visibility; Data-driven strategic decisions enabled.",
          },
          {
            title: "2. Software & Stock Control Stabilization",
            impact:
              "Upgraded reliability of customized POS and back-office systems. Addressed high-risk inventory exposure (gold, diamonds).",
            highlight: "Inventory risk mitigation & system integrity.",
          },
          {
            title: "3. Regulatory, Litigation & Structural Leadership",
            impact:
              "Handled GST/Excise scrutiny. Played key role in High Court and Supreme Court valuation disputes. Led internal shareholding restructuring.",
            highlight:
              "Converted partnership firm into a Private Limited Company using a tax-efficient route.",
          },
          {
            title: "4. Crisis & Enforcement Handling",
            impact:
              "Represented organization during Enforcement Directorate investigation.",
            highlight: "Successfully obtained clean clearance.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <h5 className="font-black text-slate-900 mb-3 text-lg">
              {item.title}
            </h5>
            <p className="text-slate-600 mb-4 font-medium leading-relaxed">
              {item.impact}
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500 text-indigo-900 font-extrabold text-sm">
              {item.highlight}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <h4 className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-2">
              Growth Results
            </h4>
            <div className="flex flex-col gap-1">
              <p className="text-4xl font-black">
                35%{" "}
                <span className="text-slate-500 text-xl font-medium">→</span>{" "}
                50% Cr
              </p>
              <p className="text-5xl font-black text-indigo-500">
                100%{" "}
                <span className="text-slate-400 text-lg uppercase font-bold tracking-tighter">
                  Projected
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <TrendingUp className="text-indigo-400 shrink-0" />
              <p className="font-bold opacity-90">
                Shifted strategic focus from revenue alone to stock turnover
                efficiency.
              </p>
            </div>
            <div className="flex gap-4">
              <Zap className="text-indigo-400 shrink-0" />
              <p className="font-bold opacity-90">
                Built recruitment and talent acquisition function; Designed
                phased sales incentives.
              </p>
            </div>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h5 className="font-black text-indigo-400 mb-2 uppercase text-xs">
              Investor Readiness
            </h5>
            <p className="text-sm font-medium opacity-80 leading-relaxed">
              Worked with investment advisors, prepared data packs, and engaged
              with leading PE firms. Strategic Decision: Pursue listing at a
              more mature scale for optimal valuation.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* FLAGSHIP ASSIGNMENT 2: SPMCIL */}
    <div className="mb-32 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-4 border-slate-900 pb-8">
        <div>
          <h3 className="text-4xl font-black text-slate-900 mb-2">
            FLAGSHIP ASSIGNMENT 2
          </h3>
          <p className="text-2xl font-bold text-indigo-700">
            Security Printing & Minting Corporation of India (SPMCIL – Kolkata
            Mint)
          </p>
          <p className="text-lg font-extrabold text-slate-500">
            (Government of India Undertaking)
          </p>
        </div>
        <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest">
          GOVT SECTOR
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
          <h4 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
            <Target className="text-amber-600" /> Context & Problem Statement
          </h4>
          <p className="text-amber-900/80 mb-6 font-medium">
            The Kolkata Mint was converted from a Government department into a
            corporate entity in 2006. Key challenges included:
          </p>
          <ul className="space-y-3 font-bold text-amber-900/70">
            <li className="flex gap-2">
              <span>•</span> No corporate accounting systems
            </li>
            <li className="flex gap-2">
              <span>•</span> Manual government registers
            </li>
            <li className="flex gap-2">
              <span>•</span> Cash-intensive payroll (~2,200 employees)
            </li>
            <li className="flex gap-2">
              <span>•</span> High regulatory exposure (Statutory + CAG +
              Ministry)
            </li>
            <li className="flex gap-2">
              <span>•</span> No formal costing framework
            </li>
            <li className="flex gap-2">
              <span>•</span> Immediate pressure for Ministry-level reporting
            </li>
          </ul>
        </div>
        <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center">
          <h4 className="text-xl font-black mb-4 uppercase tracking-tight flex items-center gap-2">
            <ShieldCheck /> My Accountability
          </h4>
          <p className="text-lg opacity-95 leading-relaxed font-medium">
            Entrusted with leading the complete accounting, compliance, costing,
            and audit framework during the transition. Acted as the primary
            interface between Management, Ministry of Finance, RBI, Cost
            Accountants, and Auditors.
          </p>
        </div>
      </div>

      <h4 className="text-2xl font-black text-slate-900 pt-8 flex items-center gap-3">
        <Settings className="text-indigo-600" /> Key Challenges, Decisions &
        Outcomes
      </h4>

      <div className="grid gap-10">
        {[
          {
            title: "1. Corporate Accounting Transition",
            challenge:
              "Migration from government accounting to Companies Act compliance without trained internal resources.",
            decisions: [
              "Reconciled legacy manual records into corporate books",
              "Implemented Tally as the base accounting system",
              "Personally handled initial high-risk entries to ensure accuracy",
              "Designed Excel-based salary, statutory deduction, and reconciliation controls",
            ],
            outcome:
              "Full Companies Act compliance achieved; Financial leakages identified and corrected; Management confidence established at an early stage.",
          },
          {
            title: "2. High-Value Cash Payroll System",
            challenge:
              "Monthly cash disbursement exceeding ₹4 crore with no digital payroll system.",
            decisions: [
              "Designed consolidated payroll accounting and reconciliation model",
              "Established monthly control checks across salary, PF, ESI, TDS, and professional tax",
            ],
            outcome:
              "Payroll risk significantly reduced; One instance of duplicate wage payment detected and recovered; Internal control credibility strengthened.",
          },
          {
            title: "3. VAT / CST Compliance on Complex Product Mix",
            challenge:
              "Differentiated tax treatment for circulative coins, medals, and commemorative coins combined with large public advance collections.",
            decisions: [
              "Designed end-to-end bank reconciliation and customer eligibility tracking",
              "Integrated accounting data with production and dispatch planning",
              "Represented the organization before Sales Tax authorities",
            ],
            outcome:
              "Statutory compliance maintained without disruption; Operational continuity ensured despite regulatory complexity.",
          },
          {
            title: "4. Fixed Asset Register – Heritage-Scale Exercise",
            challenge:
              "Assets spread across 23 departments, including machinery from the British era, with no usable classification.",
            decisions: [
              "Conducted physical asset mapping with engineers",
              "Classified usable vs discardable assets",
              "Prepared Ministry-compliant asset register and discard proposals",
            ],
            outcome:
              "Ministry-approved fixed asset register; Clear visibility and control over legacy infrastructure.",
          },
          {
            title: "5. Monthly Closing & Ministry Reporting",
            challenge:
              "Ministry of Finance mandated monthly closures and ratio reporting by the 7th of every next month.",
            decisions: [
              "Designed monthly closing calendar",
              "Standardized ratio computation and reporting formats",
            ],
            outcome:
              "Consistent, timely reporting to the Ministry; Improved financial discipline across departments.",
          },
          {
            title: "6. Manufacturing Costing for RBI Pricing",
            challenge:
              "Denomination-wise manufacturing cost required to fix selling prices of Circulative Coins (Re. 0.5 to Rs. 10) to RBI. No historical framework existed.",
            decisions: [
              "Designed a process costing system across 23 departments",
              "Applied equivalent production methodology",
              "Defended costing before ICWAI-appointed Cost Accountants",
            ],
            outcome:
              "Cost model accepted by the Ministry of Finance; RBI pricing finalized based on submitted costing; Established credibility in cost engineering at a national level.",
          },
          {
            title: "7. Audit Leadership – Statutory & CAG",
            challenge:
              "Annual dual audits with heightened scrutiny from CAG focusing on revenue leakage and systemic gaps.",
            decisions: [
              "Prepared management responses to CAG observations",
              "Coordinated statutory auditor positions",
              "Drafted technically defensible replies under regulatory pressure",
            ],
            outcome:
              "Audit observations resolved effectively; Management trust significantly strengthened. RECOGNITION: Processes followed by Kolkata Mint were recommended as a benchmark for all nine mints across India, formally recorded in AGM minutes by the Ministry of Finance.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all"
          >
            <h5 className="text-xl font-black text-indigo-700 mb-6 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                {idx + 1}
              </span>
              {item.title}
            </h5>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                    The Challenge
                  </p>
                  <p className="text-slate-800 font-bold text-lg leading-snug">
                    {item.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                    Decisions & Actions
                  </p>
                  <ul className="space-y-2">
                    {item.decisions.map((dec, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-600 font-medium text-sm"
                      >
                        <ChevronRight
                          className="text-indigo-500 shrink-0"
                          size={16}
                        />{" "}
                        {dec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl flex flex-col justify-center border-l-4 border-indigo-600">
                <p className="text-[10px] font-black tracking-widest text-indigo-400 uppercase mb-2">
                  Impact & Outcome
                </p>
                <p className="text-indigo-900 font-extrabold leading-relaxed">
                  {item.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-3xl text-white">
          <h4 className="font-black text-xl mb-4 text-indigo-400 uppercase tracking-tight">
            8. Org Leadership
          </h4>
          <p className="opacity-90 leading-relaxed font-medium">
            Deployed ~35 professionals across HR, Purchase, Sales,
            Administration. Shifted role from execution to institutional
            oversight and governance.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-3xl text-white">
          <h4 className="font-black text-xl mb-4 text-indigo-400 uppercase tracking-tight">
            9. SAP Implementation
          </h4>
          <p className="opacity-90 leading-relaxed font-medium">
            Transition from legacy to SAP across FI, CO, SD, MM, and PP Modules.
            Closed accounts for migration, coordinated with Satyam Computer
            Services, and oversaw multi-module rollout.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- EDUCATION SECTION ---
const EducationSection = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
        Education & Foundation
      </h2>
      <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid gap-16">
      {/* Analytical Foundation */}
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Science to Commerce Transition
            </h3>
            <div className="bg-indigo-600 h-1 w-12 mb-6"></div>
            <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-wider">
              The Analytical Mindset
            </p>
          </div>
          <div className="md:w-2/3 space-y-6 text-lg text-slate-700 font-medium leading-relaxed">
            <p>
              Educated initially in the <strong>science stream</strong>, with
              strong performance at the Higher Secondary level. The science
              background developed a rigorous analytical mindset, numerical
              discipline, and comfort with complex problem-solving.
            </p>
            <p>
              Strategic decision to transition into commerce at{" "}
              <strong>
                Goenka College of Commerce & Business Administration
              </strong>{" "}
              with a clear objective: to pursue Chartered Accountancy and build
              a career anchored in real-world financial decision-making.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
              <p className="text-red-900 font-extrabold italic">
                "Insight: Accumulating degrees across disciplines without
                applied leverage does not create professional advantage. Exited
                the science/engineering track to focus entirely on
                commerce—demonstrating early career judgment."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CA Journey */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-indigo-900 p-10 rounded-3xl text-white">
          <GraduationCap className="mb-6 text-indigo-400" size={40} />
          <h3 className="text-2xl font-black mb-6">
            Chartered Accountancy Journey
          </h3>
          <p className="mb-8 font-medium opacity-80">
            Approached not as an academic exercise, but as a platform for
            applied problem-solving in live business environments.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Costing", "Audit", "Taxation", "Systems"].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-3 rounded-xl border border-white/10 font-black text-center text-xs uppercase tracking-widest"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic font-light border-t border-white/10 pt-6">
            "Achieved strong performance in CA Final, particularly in
            costing-related subjects, which became a defining strength across
            manufacturing assignments."
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter underline underline-offset-8 decoration-indigo-500 decoration-4">
              Early Professional Formation
            </h3>
            <p className="font-bold text-slate-400 mb-6 tracking-widest text-xs">
              N.C. Banerjee & Associates
            </p>
            <ul className="space-y-4 text-slate-700 font-bold text-sm">
              <li className="flex gap-2 underline decoration-indigo-200">
                <span>•</span> Concurrent Audit of Syndicate Bank (Canara Bank)
              </li>
              <li className="flex gap-2">
                <span>•</span> Tax Audit of BSNL North-Eastern branches
                (Independent)
              </li>
              <li className="flex gap-2">
                <span>•</span> Statutory Audit Team – BSNL Eastern Region
              </li>
              <li className="flex gap-2">
                <span>•</span> Internal Audit of HUDCO Regional Office, Kolkata
              </li>
              <li className="flex gap-2 decoration-amber-200 underline">
                <span>•</span> Bank stock audits (e.g., Khadim India)
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-green-800 text-xs font-black mt-8 uppercase tracking-widest">
            Phase established comfort with large institutions & public sector
            rigor.
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
        <h3 className="text-3xl font-black mb-8 text-indigo-400">
          DPSV & Associates, LLP
        </h3>
        <p className="text-xl font-light mb-10 leading-relaxed max-w-3xl">
          Joined as qualified staff → **Offered partnership within 8 months**.
          This uncommon progression reflected technical depth, client trust, and
          leadership maturity.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <p className="font-black text-indigo-300 mb-1">20 Years</p>
            <p className="text-xs font-medium opacity-70 italic">
              Anchoring firm’s most complex high-risk assignments.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <p className="font-black text-indigo-300 mb-1">Board-Level</p>
            <p className="text-xs font-medium opacity-70 italic">
              Leading Enterprise-scale costing & ERP ownership.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <p className="font-black text-indigo-300 mb-1">Institutional</p>
            <p className="text-xs font-medium opacity-70 italic">
              Recognition from Ministry of Finance and PSUs.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-indigo-50 p-12 rounded-[3rem] border border-indigo-100">
        <h4 className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-6">
          Educational Philosophy
        </h4>
        <p className="text-3xl md:text-5xl font-black text-indigo-900 tracking-tight leading-none mb-4 uppercase">
          "Education has value only when it improves judgment, not when it
          merely adds credentials."
        </p>
        <p className="text-indigo-600 font-bold text-lg italic">
          This belief has guided every decision—from exiting unproductive
          academic paths to choosing assignments that demanded accountability.
        </p>
      </div>
    </div>
  </section>
);

// --- CONTACT SECTION ---
const linkedInUrl = "https://www.linkedin.com/in/soubhik-samanta";
const ContactSection = () => (
  
  
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-slate-900 text-white p-16">
        <h2 className="text-4xl font-black mb-8">Professional Engagement</h2>
        <p className="text-xl font-light text-slate-400 mb-12">
          I am available for board-level advisory and complex financial
          transformation mandates.
        </p>

        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="bg-indigo-600 p-4 rounded-2xl shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">
                Direct Contact
              </p>
              <p className="text-xl font-bold italic">
                +91 [Insert Number Here]
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-indigo-600 p-4 rounded-2xl shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">
                Professional Email
              </p>
              <p className="text-xl font-bold italic">
                soubhik@dpsvassociates.com
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-indigo-600 p-4 rounded-2xl shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs uppercase font-black tracking-widest text-slate-500 mb-1">
                Office Location
              </p>
              <p className="text-xl font-bold italic text-slate-100">
                Kolkata, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#005c8c] transition-all shadow-lg active:scale-95 min-w-[200px] justify-center"
            >
              <LinkedInSquareIcon className="w-5 h-5" />
              <span>Connect with me on LinkedIn</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
        </div>
      </div>

      <div className="md:w-1/2 p-16 flex flex-col justify-center bg-slate-50">
        <div className="space-y-8">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
            <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-widest">
              Current Mandate
            </h4>
            <p className="text-2xl font-black text-indigo-700">
              Senior Partner
            </p>
            <p className="text-slate-500 font-bold">DPSV Associate LLP</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Statutory Audits",
              "CAG Oversight",
              "ERP Implementation",
              "Cost Engineering",
              "Listing Prep",
              "Crisis Handling",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm font-black text-slate-600"
              >
                <CheckCircle2 size={16} className="text-indigo-500" /> {item}
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-indigo-700 transition-all shadow-xl">
              Download Professional Profile (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
