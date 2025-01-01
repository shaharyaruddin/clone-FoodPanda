// 'use client'
// import React, { useEffect, useRef } from "react";
// import L from "leaflet";

// const Map = ({ latitude, longitude }: { latitude?: number; longitude?: number }) => {
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const mapInstance = useRef<L.Map | null>(null);

//   useEffect(() => {
//     if (!latitude || !longitude) return;

//     if (!mapInstance.current && mapRef.current) {
//       // Initialize the map
//       mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], 13);

//       // Add tile layer
//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(mapInstance.current);

//       // Add marker
//       L.marker([latitude, longitude]).addTo(mapInstance.current);
//     } else if (mapInstance.current) {
//       // Update map center
//       mapInstance.current.setView([latitude, longitude], 13);
//     }

//     return () => {
//       // Clean up map instance on unmount
//       if (mapInstance.current) {
//         mapInstance.current.remove();
//         mapInstance.current = null;
//       }
//     };
//   }, [latitude, longitude]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <div
//         ref={mapRef}
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     </div>
//   );
// };

// export default Map;
