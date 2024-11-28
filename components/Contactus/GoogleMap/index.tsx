import React from 'react'

const Map = () => {
  return (
    <div id="Mapdiv" className="mb-10 flex justify-center items-center">
  {/* Google Map Embed */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.589839642906!2d77.0280247!3d28.3945449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1971e56c7b4d%3A0x213d8b8e1e7f2296!2sDLF%20Corporate%20Greens%2C%20Sector%2074A%2C%20Gurugram%2C%20Haryana%20122004%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
    className="mx-auto max-w-[82vw] rounded-lg"
  ></iframe>
</div>

  )
}

export default Map