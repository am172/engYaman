import React, { useEffect, useRef } from "react";
import './BranchesMap.css'
const branches = [
    {
        name: "المكتب الرئيسي (الربوة)",
        lat: 24.7136,
        lng: 46.6753,
        city: "الرياض",
        info: "ساعات العمل: 9 صباحًا - 5 مساءً"
    },
    {
        name: "مدينة الرياض الصناعية (مدن)",
        lat: 24.6372,
        lng: 46.7195,
        city: "الرياض",
        info: "ساعات العمل: 8 صباحًا - 4 مساءً"
    },
    {
        name: "صالة عرض المدينة المنورة",
        lat: 24.4686,
        lng: 39.6142,
        city: "المدينة المنورة",
        info: "ساعات العمل: 10 صباحًا - 6 مساءً"
    },
    {
        name: "صالة عرض حفر الباطن",
        lat: 28.4081,
        lng: 45.9636,
        city: "حفر الباطن",
        info: "ساعات العمل: 9 صباحًا - 5 مساءً"
    }
];

const BranchesMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loadMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 24.7136, lng: 46.6753 }, // مركز الرياض
                zoom: 6,
                mapId: "DEMO_MAP_ID"
            });

            branches.forEach((branch) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: branch.lat, lng: branch.lng },
                    map,
                    title: branch.name
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div style="font-family:'Cairo';text-align:right;">
              <strong>${branch.name}</strong><br/>
              <small>${branch.info}</small>
            </div>`
                });

                marker.addListener("mouseover", () => {
                    infoWindow.open(map, marker);
                });

                marker.addListener("mouseout", () => {
                    infoWindow.close();
                });
            });
        };

        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC6QhvFTxHZUy_IfzhDPMHqsEjjFj6ClqM&callback=initMap`;
            script.async = true;
            window.initMap = loadMap;
            document.head.appendChild(script);
        } else {
            loadMap();
        }
    }, []);

    return (
        <div className="map-container" ref={mapRef} />
    );
};

export default BranchesMap;
