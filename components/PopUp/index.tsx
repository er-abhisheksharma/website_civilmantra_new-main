'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function PopupModal() {
  const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const hasVisited = sessionStorage.getItem('hasVisited');
//     if (!hasVisited) {
//       setShowModal(true);
//       sessionStorage.setItem('hasVisited', 'true');
//     }
//   }, []);

  useEffect(() => {
    // Always show modal on mount
    setShowModal(true);
  }, []);

  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="bg-white max-w-md w-full max-md:w-[70vw] p-6 rounded-2xl shadow-2xl ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-black">🎉 New Software Solution Launch Alert !!!</h2>
            <button onClick={() => setShowModal(false)}>
              <X className="w-5 h-5 text-gray-600 hover:text-black" />
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            🚀 <strong>Consult-AI:</strong> Your one-stop solution for all pre-bid needs.
          </p>
          <a
            href="https://civilmantra.consult-ai.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition"
          >
            Check it out
          </a>
        </div>
      </div>
    )
  );
}
