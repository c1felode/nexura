'use client'
import dynamic from "next/dynamic";
import type { NextPage } from "next"

const Dashboard: NextPage = () => {
    const MapComponent = dynamic(() => import("@/components/map-component"), {
        ssr: false,
        loading: () => <p className="p-4 text-center">Loading interactive map...</p>,
    });
    return (
        <div className="">
        <MapComponent />
        </div>
    )
}

export default Dashboard;