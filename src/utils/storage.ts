export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  submittedAt: string;
  status: 'new' | 'in-progress' | 'completed';
}

export const saveContactRequest = (request: Omit<ContactRequest, 'id' | 'submittedAt' | 'status'>): ContactRequest => {
  const newRequest: ContactRequest = {
    ...request,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
    status: 'new'
  };

  const existingRequests = getContactRequests();
  const updatedRequests = [newRequest, ...existingRequests];
  
  localStorage.setItem('contactRequests', JSON.stringify(updatedRequests));
  return newRequest;
};

export const getContactRequests = (): ContactRequest[] => {
  const requests = localStorage.getItem('contactRequests');
  return requests ? JSON.parse(requests) : [];
};

export const updateRequestStatus = (id: string, status: ContactRequest['status']): void => {
  const requests = getContactRequests();
  const updatedRequests = requests.map(request => 
    request.id === id ? { ...request, status } : request
  );
  localStorage.setItem('contactRequests', JSON.stringify(updatedRequests));
};

export const deleteContactRequest = (id: string): void => {
  const requests = getContactRequests();
  const updatedRequests = requests.filter(request => request.id !== id);
  localStorage.setItem('contactRequests', JSON.stringify(updatedRequests));
};