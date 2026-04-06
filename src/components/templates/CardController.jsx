import React from 'react';
import BioCard from './BioCard';

const CardController = ({ data }) => {
  if (!data || !data.templateType || !data.payload) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="text-[#dbf3fd] font-sans tracking-widest uppercase text-sm opacity-80">
          Invalid Template Data
        </div>
      </div>
    );
  }

  switch (data.templateType) {
    case 'bio':
      return <BioCard payload={data.payload} />;
    case 'product':
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <span className="text-[#dbf3fd] tracking-widest text-sm uppercase">Product Template Route Pending</span>
        </div>
      );
    case 'vcard':
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <span className="text-[#dbf3fd] tracking-widest text-sm uppercase">vCard Template Route Pending</span>
        </div>
      );
    default:
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <span className="text-red-400 tracking-widest text-sm uppercase">Unknown Template: {data.templateType}</span>
        </div>
      );
  }
};

export default CardController;
