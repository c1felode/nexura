"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 1. Фикс для дефолтных иконок Leaflet в Next.js (иначе они ломаются при сборке)
const customIcon = L.divIcon({
  html: `<svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="%23E11D48" width="36" height="36">
           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
         </svg>`,
  className: "custom-marker-icon",
  iconSize: [36, 36],
  iconAnchor: [18, 36], // Точка привязки: середина низа иконки
});

// 2. Данные учебных центров [Широта, Долгота] — Внимание: у Leaflet порядок [Lat, Lng]!
const learningCenters = [
  { id: 1, name: "IT Park Academy", coords: [41.3112, 69.2841] as [number, number] },
];

export default function MapComponent() {
  // 3. Строгие границы Ташкента [[Юго-Запад], [Северо-Восток]]
  const tashkentBounds: L.LatLngBoundsExpression = [
    [41.17, 69.13], // Юго-западная точка границы
    [41.41, 69.45], // Северо-восточная точка границы
  ];

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[41.2995, 69.2401]} // Центр Ташкента
        zoom={12}
        minZoom={11}
        maxZoom={18}
        maxBounds={tashkentBounds}      // Блокирует перемещение за пределы Ташкента
        maxBoundsViscosity={1.0}       // 1.0 означает жесткий отскок (пользователь вообще не сможет выйти за рамки)
        style={{ width: "100%", height: "100%" }}
      >
        {/* Базовый слой карты OpenStreetMap */}
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Рендеринг маркеров учебных центров */}
        {learningCenters.map((center) => (
          <Marker 
            key={center.id} 
            position={center.coords} 
            icon={customIcon}
          >
            {/* В Leaflet встроен всплывающий попап при клике */}
            <Popup>
              <strong className="text-slate-800 text-sm">{center.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
