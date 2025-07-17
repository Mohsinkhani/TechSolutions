import React, { useState, useEffect } from 'react';
import { Mail, Phone, Building, Calendar, Clock, User, MessageSquare, DollarSign, CheckCircle, AlertCircle, Trash2, Eye, Filter, Search, Download } from 'lucide-react';
import { ContactRequest, getContactRequests, updateRequestStatus, deleteContactRequest } from '../utils/storage';

const AdminRequests: React.FC = () => {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<ContactRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'status'>('date');

  useEffect(() => {
    loadRequests();
  }, []);

  useEffect(() => {
    filterAndSortRequests();
  }, [requests, statusFilter, searchTerm, sortBy]);

  const loadRequests = () => {
    const allRequests = getContactRequests();
    setRequests(allRequests);
  };

  const filterAndSortRequests = () => {
    let filtered = [...requests];

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(request => request.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(request =>
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'status':
          return a.status.localeCompare(b.status);
        case 'date':
        default:
          return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      }
    });

    setFilteredRequests(filtered);
  };

  const handleStatusUpdate = (id: string, status: ContactRequest['status']) => {
    updateRequestStatus(id, status);
    loadRequests();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      deleteContactRequest(id);
      loadRequests();
      if (selectedRequest?.id === id) {
        setSelectedRequest(null);
      }
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Subject', 'Budget', 'Timeline', 'Status', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...filteredRequests.map(request => [
        request.name,
        request.email,
        request.phone,
        request.company,
        request.subject,
        request.budget,
        request.timeline,
        request.status,
        new Date(request.submittedAt).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-requests-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <AlertCircle size={16} />;
      case 'in-progress': return <Clock size={16} />;
      case 'completed': return <CheckCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Requests</h1>
          <p className="text-gray-600">Manage and respond to customer inquiries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">{requests.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-gray-900">
                  {requests.filter(r => r.status === 'new').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {requests.filter(r => r.status === 'in-progress').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {requests.filter(r => r.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'name' | 'status')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>

            <button
              onClick={exportToCSV}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requests List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Requests ({filteredRequests.length})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredRequests.length === 0 ? (
                  <div className="p-8 text-center">
                    <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No requests found</p>
                  </div>
                ) : (
                  filteredRequests.map((request) => (
                    <div
                      key={request.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedRequest?.id === request.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                      }`}
                      onClick={() => setSelectedRequest(request)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{request.name}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                              {getStatusIcon(request.status)}
                              <span className="ml-1 capitalize">{request.status.replace('-', ' ')}</span>
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-2">{request.subject}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Mail size={14} className="mr-1" />
                              {request.email}
                            </span>
                            <span className="flex items-center">
                              <Building size={14} className="mr-1" />
                              {request.company || 'No company'}
                            </span>
                            <span className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {new Date(request.submittedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRequest(request);
                            }}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(request.id);
                            }}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Request Details */}
          <div className="lg:col-span-1">
            {selectedRequest ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Request Details</h2>
                </div>

                <div className="p-6 space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <User size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{selectedRequest.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="text-gray-400 mr-2" />
                        <a href={`mailto:${selectedRequest.email}`} className="text-sm text-blue-600 hover:underline">
                          {selectedRequest.email}
                        </a>
                      </div>
                      {selectedRequest.phone && (
                        <div className="flex items-center">
                          <Phone size={16} className="text-gray-400 mr-2" />
                          <a href={`tel:${selectedRequest.phone}`} className="text-sm text-blue-600 hover:underline">
                            {selectedRequest.phone}
                          </a>
                        </div>
                      )}
                      {selectedRequest.company && (
                        <div className="flex items-center">
                          <Building size={16} className="text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{selectedRequest.company}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Project Details</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-500">Subject</span>
                        <p className="text-sm text-gray-900">{selectedRequest.subject}</p>
                      </div>
                      {selectedRequest.budget && (
                        <div>
                          <span className="text-xs text-gray-500">Budget</span>
                          <p className="text-sm text-gray-900">{selectedRequest.budget}</p>
                        </div>
                      )}
                      {selectedRequest.timeline && (
                        <div>
                          <span className="text-xs text-gray-500">Timeline</span>
                          <p className="text-sm text-gray-900">{selectedRequest.timeline}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Message</h3>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedRequest.message}</p>
                    </div>
                  </div>

                  {/* Status Update */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Update Status</h3>
                    <div className="space-y-2">
                      {['new', 'in-progress', 'completed'].map((status) => (
                        <button
                          key={status}
                          onClick={() => handleStatusUpdate(selectedRequest.id, status as ContactRequest['status'])}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedRequest.status === status
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center">
                            {getStatusIcon(status)}
                            <span className="ml-2 capitalize">{status.replace('-', ' ')}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submitted Date */}
                  <div>
                    <span className="text-xs text-gray-500">Submitted</span>
                    <p className="text-sm text-gray-900">
                      {new Date(selectedRequest.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select a request to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRequests;