import React from 'react';

const Management = () => {
  const team = [
    {
      name: "Selbert George",
      role: "Director",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg5i9ji7y3EkMUmS8QyTuuEnHnFQUJq2fBdTSz2eZChLmO6MDDhmohWfintGUwoaNyZVCMS0NPGUF507w5OPbCYQfEbFttC4GJUGfrBV_huhql9eZrWt46ANTGdHoaasglQoluIG3A0uQWev4OZsmA6vcP8oKa8q1l9lBZOe9aR1th_G9aSg0mkquyiMjsENsJ3YMZp6-EFb-gsd3jroPowJuHzbWdYs7wtbb8JDCiD3PF0LGWxjWF_KVZc__PttGLLy3H5rHbGg"
    },
    {
      name: "Mr Gautham Raj",
      role: "Project Manager & Head of Project",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4GatY3DbDmkDbf27ZJs0eZBAAIiYF9BOvM7k4fMR70Ogv3z7fxU4g-an8Qty9LpZStPRy0fRiBiR98FcmwTe73CQ1zZ8xO4spowSUK4f_boKbYeC8M4twxnYsCFVkAYLRAB35QTZC9j-i3D-PXdXgO-B6Bo2bBISS9D2HKpY4R-5Ktqzkrj7Hq5dFnGZv1QKG_P_-k3GcCdloJb3WkvcajXlwxwzWWaJvLjmFIFmfySbrhU6huaSQRfP8ydpiaAfHpWBo0IptMA"
    },
    {
      name: "Albert Dsilva",
      role: "Assistant Project Manager",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOJLuKatjRY1IIs6Mnvvv9mge6sTdTnvCBr3RY1FCN_23eHjeXoKUSS5HwH5Vob9Wkm93iWmAVg-snaNvuATYuH3P_18vU5omr51R8Q3ta4LiMuSwd1rbz2np_5apUfAJ29XJVc3MpDFvZR7hG4nCiDXTyE0pwQZQPt11cOSfaGa7R1kZVd1fgY_bO6lNAqGjBYPmT2CqoOXmjsi7XXKC01qISz7hbAUUXuIKTg_zTVxPA1HND4E5yGaIou84OoZirPtvu7l6BTw"
    }
  ];

  return (
    <section className="py-24 bg-white" id="management">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-gray-900"></div>
            <span className="text-gray-500 text-sm font-medium">Management</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Meet the Management team</h2>
          <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
            Meet the talented individuals who drive our company's success with their dedication, expertise, and passion for innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {team.map((member, index) => (
            <div key={index} className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-gray-100">
              <img 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={member.img} 
              />
              
              {/* Floating Name Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-2xl">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-gray-500 text-sm font-medium">{member.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Acknowledgement Box */}
        {/* <div className="max-w-4xl mx-auto relative p-10 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gray-900"></div>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            <strong>Special Acknowledgement:</strong> We acknowledge the operational guidance and support of Mr James Sagoe, CEO & Founder of Bazilel Infrastructure Partners Limited.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Management;
