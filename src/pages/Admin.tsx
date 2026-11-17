import React, { useState, useEffect } from 'react';

export const Admin = () => {
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [opportunities, setOpportunities] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        id: '', type: '', sector: '', sectorCategory: 'Hospitality & Leisure',
        location: '', size: '', sizeCategory: 'Under LKR 250Mn', status: 'Open'
    });

    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchOpportunities = () => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setOpportunities(data));
    };

    useEffect(() => {
        if (isLoggedIn) fetchOpportunities();
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') setIsLoggedIn(true);
        else alert('Incorrect Password!');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': password
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert('Opportunity Added!');
            fetchOpportunities();
            setFormData({ ...formData, id: '', type: '', sector: '', location: '', size: '' });
        } else {
            alert('Failed to add. Make sure ID is unique.');
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this?')) return;

        const res = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': password }
        });
        if (res.ok) fetchOpportunities();
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-center">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="border p-3 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-600 text-white p-3 rounded font-bold">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto pt-32 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Add Opportunity</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input placeholder="ID (e.g. DB030)" required className="border p-2 rounded" value={formData.id} onChange={e => setFormData({ ...formData, id: e.target.value })} />
                    <input placeholder="Type (e.g. Asset Acquisition)" required className="border p-2 rounded" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} />
                    <input placeholder="Sector Description" required className="border p-2 rounded" value={formData.sector} onChange={e => setFormData({ ...formData, sector: e.target.value })} />
                    <input placeholder="Location" required className="border p-2 rounded" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                    <input placeholder="Size exact (e.g. LKR 99Mn)" required className="border p-2 rounded" value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })} />

                    <select className="border p-2 rounded" value={formData.sectorCategory} onChange={e => setFormData({ ...formData, sectorCategory: e.target.value })}>
                        <option value="Hospitality & Leisure">Hospitality & Leisure</option>
                        <option value="Technology & ICT">Technology & ICT</option>
                        <option value="Consumer & Agri">Consumer & Agri</option>
                        <option value="Energy & Mobility">Energy & Mobility</option>
                        <option value="Financial Services">Financial Services</option>
                        <option value="Education">Education</option>
                    </select>

                    <select className="border p-2 rounded" value={formData.sizeCategory} onChange={e => setFormData({ ...formData, sizeCategory: e.target.value })}>
                        <option value="Under LKR 250Mn">Under LKR 250Mn</option>
                        <option value="LKR 250Mn–500Mn">LKR 250Mn–500Mn</option>
                        <option value="LKR 500Mn–1Bn">LKR 500Mn–1Bn</option>
                        <option value="LKR 1Bn+">LKR 1Bn+</option>
                    </select>

                    <select className="border p-2 rounded" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                        <option value="Open">Open</option>
                        <option value="Review">Review</option>
                        <option value="Closed">Closed</option>
                    </select>

                    <button type="submit" className="bg-green-600 text-white p-3 rounded font-bold mt-2">Publish</button>
                </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border overflow-y-auto max-h-[600px]">
                <h2 className="text-2xl font-bold mb-6">Manage Records</h2>
                {opportunities.map(opp => (
                    <div key={opp.id} className="border-b py-3 flex justify-between items-center">
                        <div>
                            <span className="font-bold">{opp.id}</span> - <span className="text-sm text-gray-500">{opp.sector}</span>
                        </div>
                        <button onClick={() => handleDelete(opp.id)} className="text-red-500 text-sm font-bold bg-red-50 px-3 py-1 rounded">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};