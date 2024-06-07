
import React from 'react';

const Case = ({ caseData }) => {
  return (
  
  <>
    <div className="case">
      <h2>{caseData.name}</h2>
      <p><strong>Description:</strong> {caseData.description}</p>
      <p><strong>Phone Number:</strong> {caseData.phoneNumber}</p>
      <p><strong>Case Number:</strong> {caseData.numberOfCase}</p>
      <p><strong>Client ID:</strong> {caseData.clientId}</p>
      <p><strong>Created At:</strong> {new Date(caseData.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(caseData.updatedAt).toLocaleString()}</p>
      <a href={caseData.caseFile.secure_url} target="_blank" rel="noopener noreferrer">View Case File</a>
    </div>


    
    </>
  );
}

export default Case;