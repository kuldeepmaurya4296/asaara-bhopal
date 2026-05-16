import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Send, AlertCircle, CheckCircle, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import SEO from '../components/SEO';

const emptyUmoor = {
  name: "",
  keyAchievement: "",
  futureGoals: "",
  representative: {
    name: "",
    contact: "",
    designation: "",
    image: ""
  }
};

export default function CreateReportPage() {
  const [formData, setFormData] = useState({
    id: "",
    cityName: "",
    overview: "",
    highlights: [""],
    swotAnalysis: {
      strengths: [""],
      weaknesses: [""],
      opportunities: [""],
      threats: [""]
    },
    umoors: [{ ...emptyUmoor, representative: { ...emptyUmoor.representative } }],
    gallery: [""]
  });

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
  };

  const handleArrayChange = (e, index, field, subfield = null) => {
    const { value } = e.target;
    setFormData(prev => {
      if (subfield) {
        const newSubArray = [...prev[field][subfield]];
        newSubArray[index] = value;
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: newSubArray
          }
        };
      } else {
        const newArray = [...prev[field]];
        newArray[index] = value;
        return {
          ...prev,
          [field]: newArray
        };
      }
    });
  };

  const addArrayItem = (field, subfield = null) => {
    setFormData(prev => {
      if (subfield) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: [...prev[field][subfield], ""]
          }
        };
      } else {
        return {
          ...prev,
          [field]: [...prev[field], ""]
        };
      }
    });
  };

  const removeArrayItem = (index, field, subfield = null) => {
    setFormData(prev => {
      if (subfield) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: prev[field][subfield].filter((_, i) => i !== index)
          }
        };
      } else {
        return {
          ...prev,
          [field]: prev[field].filter((_, i) => i !== index)
        };
      }
    });
  };

  const handleUmoorChange = (e, index, field, subfield = null) => {
    const { value } = e.target;
    setFormData(prev => {
      const newUmoors = [...prev.umoors];
      const targetUmoor = { ...newUmoors[index] };

      if (subfield) {
        targetUmoor[field] = { ...targetUmoor[field], [subfield]: value };
      } else {
        targetUmoor[field] = value;
      }

      newUmoors[index] = targetUmoor;
      return { ...prev, umoors: newUmoors };
    });
  };

  const addUmoor = () => {
    setFormData(prev => ({
      ...prev,
      umoors: [...prev.umoors, { ...emptyUmoor, representative: { ...emptyUmoor.representative } }]
    }));
  };

  const removeUmoor = (index) => {
    setFormData(prev => ({
      ...prev,
      umoors: prev.umoors.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    if (!formData.cityName.trim() || !formData.overview.trim()) return false;

    // Check arrays
    if (formData.highlights.some(h => !h.trim())) return false;
    if (formData.swotAnalysis.strengths.some(s => !s.trim())) return false;
    if (formData.swotAnalysis.weaknesses.some(w => !w.trim())) return false;
    if (formData.swotAnalysis.opportunities.some(o => !o.trim())) return false;
    if (formData.swotAnalysis.threats.some(t => !t.trim())) return false;
    if (formData.gallery.some(g => !g.trim())) return false;

    // Check umoors
    for (const umoor of formData.umoors) {
      if (!umoor.name.trim() || !umoor.keyAchievement.trim() || !umoor.futureGoals.trim()) return false;
      if (!umoor.representative.name.trim() || !umoor.representative.contact.trim() || !umoor.representative.designation.trim() || !umoor.representative.image.trim()) return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!validateForm()) {
      const errorMsg = 'Please fill in all mandatory fields correctly.';
      setFormError(errorMsg);
      showToast(errorMsg, 'error');
      return;
    }

    // Auto generate ID from city name
    const submitData = {
      ...formData,
      id: formData.cityName.toLowerCase().replace(/\s+/g, '-')
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        showToast('Report Data Successfully Mailed to Admin!');
        // Reset form
        setFormData({
          id: "",
          cityName: "",
          overview: "",
          highlights: [""],
          swotAnalysis: {
            strengths: [""],
            weaknesses: [""],
            opportunities: [""],
            threats: [""]
          },
          umoors: [{ ...emptyUmoor, representative: { ...emptyUmoor.representative } }],
          gallery: [""]
        });
      } else {
        showToast(result.error || 'Failed to submit report', 'error');
      }
    } catch (error) {
      showToast('An error occurred. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-body bg-cream min-h-screen pb-20">
      <SEO title="Create City Report Data | Admin" />

      {/* Custom Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className={`fixed top-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${toast.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}
          >
            {toast.type === 'error' ? <AlertCircle size={20} className="text-red-500" /> : <CheckCircle size={20} className="text-emerald-500" />}
            <span className="font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-emerald-dark text-white py-6 px-4 shadow-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <button onClick={() => window.location.href = '/'} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Back to Home">
              <ArrowLeft size={20} />
            </button> */}
            <h1 className="text-2xl font-heading font-bold text-gold">Create Report JSON</h1>
          </div>
          <div className="text-xs bg-white/10 px-3 py-1.5 rounded-full font-medium">Independent Mode</div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="space-y-12">

          {/* Basic Info */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-dark/10 space-y-6">
            <h2 className="text-xl font-heading font-bold text-emerald-dark border-b pb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-charcoal/80 mb-2">City Name <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  value={formData.cityName}
                  onChange={(e) => setFormData({ ...formData, cityName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark focus:ring-2 focus:ring-emerald-dark/20 transition-all outline-none"
                  placeholder="e.g., Indore"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal/80 mb-2">Overview <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows="4"
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark focus:ring-2 focus:ring-emerald-dark/20 transition-all outline-none resize-y"
                  placeholder="Comprehensive summary of the city's progress..."
                />
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-dark/10 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-heading font-bold text-emerald-dark">Key Highlights</h2>
              <button type="button" onClick={() => addArrayItem('highlights')} className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors">
                <Plus size={16} /> Add Highlight
              </button>
            </div>
            <div className="space-y-3">
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <input
                    required
                    type="text"
                    value={highlight}
                    onChange={(e) => handleArrayChange(e, index, 'highlights')}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark focus:ring-2 focus:ring-emerald-dark/20 transition-all outline-none"
                    placeholder="e.g., Successfully launched the Green City initiative..."
                  />
                  {formData.highlights.length > 1 && (
                    <button type="button" onClick={() => removeArrayItem(index, 'highlights')} className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SWOT Analysis */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-dark/10 space-y-8">
            <h2 className="text-xl font-heading font-bold text-emerald-dark border-b pb-4">SWOT Analysis</h2>

            {/* Strengths */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-emerald-700">Strengths</h3>
                <button type="button" onClick={() => addArrayItem('swotAnalysis', 'strengths')} className="text-sm font-bold text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-md"><Plus size={18} /></button>
              </div>
              {formData.swotAnalysis.strengths.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input required type="text" value={item} onChange={(e) => handleArrayChange(e, index, 'swotAnalysis', 'strengths')} className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:border-emerald-dark outline-none" placeholder="Strength detail..." />
                  {formData.swotAnalysis.strengths.length > 1 && <button type="button" onClick={() => removeArrayItem(index, 'swotAnalysis', 'strengths')} className="p-2 text-red-500"><Trash2 size={16} /></button>}
                </div>
              ))}
            </div>

            {/* Weaknesses */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-red-700">Weaknesses</h3>
                <button type="button" onClick={() => addArrayItem('swotAnalysis', 'weaknesses')} className="text-sm font-bold text-red-600 hover:bg-red-50 p-1.5 rounded-md"><Plus size={18} /></button>
              </div>
              {formData.swotAnalysis.weaknesses.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input required type="text" value={item} onChange={(e) => handleArrayChange(e, index, 'swotAnalysis', 'weaknesses')} className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:border-red-600 outline-none" placeholder="Weakness detail..." />
                  {formData.swotAnalysis.weaknesses.length > 1 && <button type="button" onClick={() => removeArrayItem(index, 'swotAnalysis', 'weaknesses')} className="p-2 text-red-500"><Trash2 size={16} /></button>}
                </div>
              ))}
            </div>

            {/* Opportunities */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-blue-700">Opportunities</h3>
                <button type="button" onClick={() => addArrayItem('swotAnalysis', 'opportunities')} className="text-sm font-bold text-blue-600 hover:bg-blue-50 p-1.5 rounded-md"><Plus size={18} /></button>
              </div>
              {formData.swotAnalysis.opportunities.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input required type="text" value={item} onChange={(e) => handleArrayChange(e, index, 'swotAnalysis', 'opportunities')} className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:border-blue-600 outline-none" placeholder="Opportunity detail..." />
                  {formData.swotAnalysis.opportunities.length > 1 && <button type="button" onClick={() => removeArrayItem(index, 'swotAnalysis', 'opportunities')} className="p-2 text-red-500"><Trash2 size={16} /></button>}
                </div>
              ))}
            </div>

            {/* Threats */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-orange-700">Threats</h3>
                <button type="button" onClick={() => addArrayItem('swotAnalysis', 'threats')} className="text-sm font-bold text-orange-600 hover:bg-orange-50 p-1.5 rounded-md"><Plus size={18} /></button>
              </div>
              {formData.swotAnalysis.threats.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input required type="text" value={item} onChange={(e) => handleArrayChange(e, index, 'swotAnalysis', 'threats')} className="flex-1 px-4 py-2 text-sm rounded-lg border border-gray-300 focus:border-orange-600 outline-none" placeholder="Threat detail..." />
                  {formData.swotAnalysis.threats.length > 1 && <button type="button" onClick={() => removeArrayItem(index, 'swotAnalysis', 'threats')} className="p-2 text-red-500"><Trash2 size={16} /></button>}
                </div>
              ))}
            </div>
          </section>

          {/* Umoors */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-dark/10 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-heading font-bold text-emerald-dark">Umoors Operational</h2>
              <button type="button" onClick={addUmoor} className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors">
                <Plus size={16} /> Add Umoor
              </button>
            </div>

            <div className="space-y-8">
              {formData.umoors.map((umoor, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative">
                  {formData.umoors.length > 1 && (
                    <button type="button" onClick={() => removeUmoor(index)} className="absolute top-4 right-4 text-red-500 hover:bg-red-100 p-2 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-charcoal/80 mb-2">Umoor Name <span className="text-red-500">*</span></label>
                      <input required type="text" value={umoor.name} onChange={(e) => handleUmoorChange(e, index, 'name')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark outline-none" placeholder="e.g., Umoor Dakhiliya" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-charcoal/80 mb-2">Key Achievement <span className="text-red-500">*</span></label>
                      <textarea required rows="2" value={umoor.keyAchievement} onChange={(e) => handleUmoorChange(e, index, 'keyAchievement')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark outline-none resize-y" placeholder="Achievement details..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-charcoal/80 mb-2">Future Goals <span className="text-red-500">*</span></label>
                      <textarea required rows="2" value={umoor.futureGoals} onChange={(e) => handleUmoorChange(e, index, 'futureGoals')} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark outline-none resize-y" placeholder="Future goals..." />
                    </div>

                    {/* Representative Info */}
                    <div className="md:col-span-2 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <h4 className="font-bold text-emerald-dark text-sm uppercase tracking-wider mb-2">Representative Details</h4>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/60 mb-1">Name <span className="text-red-500">*</span></label>
                        <input required type="text" value={umoor.representative.name} onChange={(e) => handleUmoorChange(e, index, 'representative', 'name')} className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:border-emerald-dark outline-none" placeholder="Name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/60 mb-1">Contact <span className="text-red-500">*</span></label>
                        <input required type="text" value={umoor.representative.contact} onChange={(e) => handleUmoorChange(e, index, 'representative', 'contact')} className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:border-emerald-dark outline-none" placeholder="Phone or Email" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/60 mb-1">Designation <span className="text-red-500">*</span></label>
                        <input required type="text" value={umoor.representative.designation} onChange={(e) => handleUmoorChange(e, index, 'representative', 'designation')} className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:border-emerald-dark outline-none" placeholder="Designation" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-charcoal/60 mb-1">Image URL (Google Drive / Web Link) <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <ImageIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input required type="url" value={umoor.representative.image} onChange={(e) => handleUmoorChange(e, index, 'representative', 'image')} className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-300 focus:border-emerald-dark outline-none" placeholder="https://..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Media Gallery */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-dark/10 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-heading font-bold text-emerald-dark">Media Gallery Images</h2>
              <button type="button" onClick={() => addArrayItem('gallery')} className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors">
                <Plus size={16} /> Add Image
              </button>
            </div>
            <div className="space-y-3">
              {formData.gallery.map((url, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative flex-1">
                    <ImageIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      required
                      type="url"
                      value={url}
                      onChange={(e) => handleArrayChange(e, index, 'gallery')}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-dark focus:ring-2 focus:ring-emerald-dark/20 transition-all outline-none"
                      placeholder="Enter Image URL (https://...)"
                    />
                  </div>
                  {formData.gallery.length > 1 && (
                    <button type="button" onClick={() => removeArrayItem(index, 'gallery')} className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg text-emerald-dark flex items-center justify-center gap-2 transition-all shadow-lg ${isSubmitting ? 'bg-gold/50 cursor-not-allowed' : 'bg-gold hover:bg-[#c99f3b] hover:shadow-xl hover:-translate-y-1'
                }`}
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send size={20} />
                  Submit JSON Report Data
                </>
              )}
            </button>

            {formError && (
              <div className="flex items-center justify-center gap-2 mt-4 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                <AlertCircle size={18} />
                <span className="font-semibold">{formError}</span>
              </div>
            )}

            <p className="text-center text-sm text-charcoal/50 mt-4">This will format the data into JSON and securely email it to you.</p>
          </div>

        </form>
      </main>
    </div>
  );
}
