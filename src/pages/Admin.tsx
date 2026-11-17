import React, { useState, useEffect, useMemo } from 'react';
import {
  Plus,
  Trash2,
  Search,
  Filter,
  LogOut,
  MapPin,
  Lock,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Layers,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Opportunity {
  id: string;
  type: string;
  sector: string;
  sectorCategory: string;
  location: string;
  size: string;
  sizeCategory: string;
  status: 'Open' | 'Review' | 'Closed';
}

const SECTOR_CATEGORIES = [
  'Hospitality & Leisure',
  'Technology & ICT',
  'Consumer & Agri',
  'Energy & Mobility',
  'Financial Services',
  'Education',
];

const SIZE_CATEGORIES = [
  'Under LKR 250Mn',
  'LKR 250Mn–500Mn',
  'LKR 500Mn–1Bn',
  'LKR 1Bn+',
];

export const Admin = () => {
  // Authentication with sessionStorage persistence
  const [password, setPassword] = useState(() => sessionStorage.getItem('stratova_admin_pwd') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!sessionStorage.getItem('stratova_admin_pwd'));
  const [loginError, setLoginError] = useState('');

  // Opportunities state
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Filter & Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [sectorFilter, setSectorFilter] = useState<string>('All');

  // Form expansion state
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Form data
  const initialFormState = {
    id: '',
    type: '',
    sector: '',
    sectorCategory: 'Hospitality & Leisure',
    location: '',
    size: '',
    sizeCategory: 'Under LKR 250Mn',
    status: 'Open' as 'Open' | 'Review' | 'Closed',
  };
  const [formData, setFormData] = useState(initialFormState);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/opportunities';

  const fetchOpportunities = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error('Failed to fetch opportunities');
      const data = await res.json();
      setOpportunities(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setActionMessage({ type: 'error', text: 'Could not connect to the API server. Please ensure the backend is running.' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchOpportunities();
    }
  }, [isLoggedIn]);

  // Auto-clear notification messages
  useEffect(() => {
    if (actionMessage) {
      const timer = setTimeout(() => setActionMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [actionMessage]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      sessionStorage.setItem('stratova_admin_pwd', password);
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('stratova_admin_pwd');
    setPassword('');
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setActionMessage(null);

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: password,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `Opportunity #${formData.id} published successfully!`,
        });
        setFormData(initialFormState);
        fetchOpportunities();
      } else {
        const errorData = await res.json().catch(() => ({}));
        setActionMessage({
          type: 'error',
          text: errorData.error || 'Failed to add opportunity. Please check that the ID is unique.',
        });
      }
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: 'Network error: could not connect to server.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete opportunity "${id}"?`)) {
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: password },
      });

      if (res.ok) {
        setActionMessage({
          type: 'success',
          text: `Opportunity #${id} deleted successfully.`,
        });
        fetchOpportunities();
      } else {
        setActionMessage({
          type: 'error',
          text: `Failed to delete opportunity #${id}.`,
        });
      }
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: 'Network error while attempting to delete.',
      });
    }
  };

  // Filtered opportunities
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        opp.id?.toLowerCase().includes(query) ||
        opp.type?.toLowerCase().includes(query) ||
        opp.sector?.toLowerCase().includes(query) ||
        opp.location?.toLowerCase().includes(query);

      const matchesStatus = statusFilter === 'All' || opp.status === statusFilter;
      const matchesSector = sectorFilter === 'All' || opp.sectorCategory === sectorFilter;

      return matchesSearch && matchesStatus && matchesSector;
    });
  }, [opportunities, searchTerm, statusFilter, sectorFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = opportunities.length;
    const open = opportunities.filter((o) => o.status === 'Open').length;
    const review = opportunities.filter((o) => o.status === 'Review').length;
    const closed = opportunities.filter((o) => o.status === 'Closed').length;
    return { total, open, review, closed };
  }, [opportunities]);

  // Login View
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 pt-28 pb-16">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#1d7eb6] mb-4">
              <Lock size={30} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Admin Portal</h2>
            <p className="text-gray-500 text-sm mt-2">Enter credentials to manage investment opportunities</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                Administrator Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            </div>

            {loginError && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                <AlertCircle size={18} className="shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#0f182b] hover:bg-[#1d7eb6] text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-[0.99] cursor-pointer"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link to="/investments" className="text-sm font-medium text-gray-500 hover:text-[#1d7eb6] transition-colors inline-flex items-center gap-1.5">
              ← Return to public listings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Dashboard Top Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-50 text-[#1d7eb6] rounded-full text-xs font-bold tracking-wide uppercase">
                Management Portal
              </span>
              <span className="text-xs text-gray-400 font-medium">Logged in as Administrator</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mt-2">
              Opportunities Dashboard
            </h1>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Publish new investment opportunities, monitor active deal flow, and manage listing statuses across the portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              to="/investments"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border border-gray-200 text-gray-700 bg-white hover:border-[#1d7eb6] hover:text-[#1d7eb6] transition-colors"
            >
              <ExternalLink size={16} />
              <span>View Public Portal</span>
            </Link>

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#1d7eb6] hover:bg-[#12557a] text-white transition-all shadow-sm cursor-pointer"
            >
              <Plus size={16} />
              <span>{isFormOpen ? 'Hide Add Form' : 'New Opportunity'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-500 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Action Status Notification Toast/Banner */}
        {actionMessage && (
          <div
            className={`flex items-center justify-between p-4 rounded-2xl border shadow-sm transition-all animate-fadeIn ${
              actionMessage.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center gap-3">
              {actionMessage.type === 'success' ? (
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle size={20} className="text-red-600 shrink-0" />
              )}
              <p className="text-sm font-semibold">{actionMessage.text}</p>
            </div>
            <button
              onClick={() => setActionMessage(null)}
              className="text-xs font-bold opacity-60 hover:opacity-100 px-2 py-1"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Listings</p>
              <h3 className="text-3xl font-black text-gray-900 mt-1">{stats.total}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#137333]"></span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Actively Raising</p>
              </div>
              <h3 className="text-3xl font-black text-[#137333] mt-1">{stats.open}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#e6f4ea] flex items-center justify-center text-[#137333]">
              <Layers size={22} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b06000]"></span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">In Diligence</p>
              </div>
              <h3 className="text-3xl font-black text-[#b06000] mt-1">{stats.review}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#fef7e0] flex items-center justify-center text-[#b06000]">
              <Filter size={22} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Closed / Inactive</p>
              </div>
              <h3 className="text-3xl font-black text-gray-600 mt-1">{stats.closed}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600">
              <CheckCircle2 size={22} />
            </div>
          </div>
        </div>

        {/* Section 1: Add New Opportunity (Spacious Multi-Column Card) */}
        {isFormOpen && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1d7eb6] inline-flex items-center justify-center">
                    <Plus size={20} />
                  </span>
                  Add New Opportunity
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Fill in the details below to publish an opportunity directly to the live investment portal.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                title="Collapse Form"
              >
                <ChevronUp size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: ID, Deal Type, Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Opportunity ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DB035"
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value.toUpperCase() })}
                  />
                  <p className="text-[11px] text-gray-400 mt-1">Unique alphanumeric identifier</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Deal Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asset Acquisition, Equity Stake"
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  />
                  <p className="text-[11px] text-gray-400 mt-1">Transaction or investment structure</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kandy, Western Province"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">Geographic region or city</p>
                </div>
              </div>

              {/* Row 2: Sector Category, Investment Size Exact, Size Range Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Sector Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium cursor-pointer"
                    value={formData.sectorCategory}
                    onChange={(e) => setFormData({ ...formData, sectorCategory: e.target.value })}
                  >
                    {SECTOR_CATEGORIES.map((sec) => (
                      <option key={sec} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-gray-400 mt-1">Used for public sector filtering</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Exact Investment Size <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. LKR 99Mn or LKR 1.2Bn"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    />
                    <DollarSign size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">Exact valuation or ticket size</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Size Category Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium cursor-pointer"
                    value={formData.sizeCategory}
                    onChange={(e) => setFormData({ ...formData, sizeCategory: e.target.value })}
                  >
                    {SIZE_CATEGORIES.map((sz) => (
                      <option key={sz} value={sz}>
                        {sz}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-gray-400 mt-1">Bucket range for public filtering</p>
                </div>
              </div>

              {/* Row 3: Detailed Sector / Investment Description (Full Width with ample room) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Sector & Business Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Boutique luxury eco-resort with 18 chalets, organic tea estate, and approved expansion master plan."
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all text-sm font-medium resize-y"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Comprehensive description displayed on the main opportunity table.
                </p>
              </div>

              {/* Row 4: Status Selector & Actions */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Initial Status
                  </label>
                  <div className="flex items-center gap-3">
                    <label
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                        formData.status === 'Open'
                          ? 'bg-[#e6f4ea] text-[#137333] border-[#137333]/30 shadow-sm'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value="Open"
                        checked={formData.status === 'Open'}
                        onChange={() => setFormData({ ...formData, status: 'Open' })}
                        className="sr-only"
                      />
                      <span className="w-2 h-2 rounded-full bg-[#137333]"></span>
                      Open (Actively Raising)
                    </label>

                    <label
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                        formData.status === 'Review'
                          ? 'bg-[#fef7e0] text-[#b06000] border-[#b06000]/30 shadow-sm'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value="Review"
                        checked={formData.status === 'Review'}
                        onChange={() => setFormData({ ...formData, status: 'Review' })}
                        className="sr-only"
                      />
                      <span className="w-2 h-2 rounded-full bg-[#b06000]"></span>
                      Review (In Diligence)
                    </label>

                    <label
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border cursor-pointer transition-all ${
                        formData.status === 'Closed'
                          ? 'bg-[#f1f3f4] text-[#5f6368] border-[#5f6368]/30 shadow-sm'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value="Closed"
                        checked={formData.status === 'Closed'}
                        onChange={() => setFormData({ ...formData, status: 'Closed' })}
                        className="sr-only"
                      />
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Closed (Funded)
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(initialFormState)}
                    className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold text-sm transition-colors cursor-pointer"
                  >
                    Reset Form
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#0f182b] hover:bg-[#1d7eb6] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        <span>Publish Opportunity</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Section 2: Manage Records (Spacious Full-Width Table) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table Controls Header */}
          <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                  Manage Records
                </h2>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">
                  {filteredOpportunities.length} of {opportunities.length}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Browse, search, and manage all published opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search ID, sector, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1d7eb6]/20 focus:border-[#1d7eb6] transition-all"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:border-[#1d7eb6] cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Open">Open</option>
                <option value="Review">Review</option>
                <option value="Closed">Closed</option>
              </select>

              {/* Sector Filter */}
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:border-[#1d7eb6] cursor-pointer"
              >
                <option value="All">All Sectors</option>
                {SECTOR_CATEGORIES.map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>

              {/* Refresh Button */}
              <button
                onClick={fetchOpportunities}
                disabled={isLoading}
                className="p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-gray-600 transition-colors cursor-pointer"
                title="Refresh Table"
              >
                <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-gray-400 inline-flex items-center justify-center mb-4">
                  <Search size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No opportunities match your filter</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                  {opportunities.length === 0
                    ? 'No records found in database. Create your first opportunity using the form above.'
                    : 'Try clearing your search query or setting the filters back to All.'}
                </p>
                {(searchTerm || statusFilter !== 'All' || sectorFilter !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('All');
                      setSectorFilter('All');
                    }}
                    className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            ) : (
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50/75 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    <th className="py-4 px-6 w-[10%]">ID</th>
                    <th className="py-4 px-6 w-[15%]">Type</th>
                    <th className="py-4 px-6 w-[30%]">Sector Description</th>
                    <th className="py-4 px-6 w-[12%]">Category</th>
                    <th className="py-4 px-6 w-[12%]">Location</th>
                    <th className="py-4 px-6 w-[11%]">Size</th>
                    <th className="py-4 px-6 w-[10%] text-center">Status</th>
                    <th className="py-4 px-6 w-[10%] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredOpportunities.map((opp) => (
                    <tr
                      key={opp.id}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      {/* ID */}
                      <td className="py-4 px-6">
                        <span className="font-extrabold text-gray-900 bg-gray-100 group-hover:bg-white px-2.5 py-1 rounded-lg border border-gray-200 text-xs tracking-wider">
                          {opp.id}
                        </span>
                      </td>

                      {/* Type */}
                      <td className="py-4 px-6 font-semibold text-gray-800">
                        {opp.type}
                      </td>

                      {/* Sector Description */}
                      <td className="py-4 px-6 text-gray-600">
                        <p className="line-clamp-2 leading-relaxed">
                          {opp.sector}
                        </p>
                      </td>

                      {/* Sector Category */}
                      <td className="py-4 px-6">
                        <span className="inline-block text-xs font-semibold text-[#1d7eb6] bg-blue-50 px-2.5 py-1 rounded-md">
                          {opp.sectorCategory}
                        </span>
                      </td>

                      {/* Location */}
                      <td className="py-4 px-6 text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-gray-400 shrink-0" />
                          <span className="truncate">{opp.location}</span>
                        </div>
                      </td>

                      {/* Size */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-900">{opp.size}</div>
                        <div className="text-[11px] text-gray-400">{opp.sizeCategory}</div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                            opp.status === 'Open'
                              ? 'bg-[#e6f4ea] text-[#137333]'
                              : opp.status === 'Review'
                              ? 'bg-[#fef7e0] text-[#b06000]'
                              : 'bg-[#f1f3f4] text-[#5f6368]'
                          }`}
                        >
                          {opp.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => handleDelete(opp.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 transition-all shadow-sm cursor-pointer"
                          title={`Delete ${opp.id}`}
                        >
                          <Trash2 size={13} />
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
