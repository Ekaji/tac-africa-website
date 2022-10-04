/* eslint-disable react/jsx-key */

export default function Map() {
  return (
    <div className="map mt-20">
        <div className="h-[80vh]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.959657189682!2d7.434117475697642!3d9.071115298364937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75132c94ede3%3A0x5f888cc1ac103f6f!2sTechnology%20against%20Crime%20AFRICA!5e0!3m2!1sen!2sng!4v1662648651284!5m2!1sen!2sng"
               
                allowFullScreen=""
                style={{ border: "0", height: '80vh', width: '100%' }}
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
  )
}