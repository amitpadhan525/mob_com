'use client';

import { useState } from 'react';

import Image from 'next/image';

interface Mobile {
    id: number;
    name: string;
    brand: string;
    price: number;
    image_url: string;
    overall_rating?: number;

    // CPU / Performance
    chipset: string;
    cpu_cores: string;
    cpu_freq: string;
    gpu: string;
    process_nm: string;
    isp: string;
    npu: string;

    // RAM
    ram_capacity: string;
    ram_type: string;
    ram_speed: string;

    // Storage
    storage_capacity: string;
    storage_type: string;
    expandable_storage: string;

    // Rear Camera
    rear_main_mp: string;
    rear_sensor_size: string;
    rear_aperture: string;
    rear_ultrawide: string;
    rear_telephoto: string;
    rear_macro: string;
    rear_depth: string;
    rear_ois: string;
    rear_video: string;

    // Front Camera
    front_mp: string;
    front_sensor_size: string;
    front_aperture: string;
    front_video: string;

    // Display
    display_size: string;
    display_type: string;
    resolution: string;
    refresh_rate: string;
    brightness: string;
    hdr: string;
    protection: string;

    // Battery
    battery_capacity: string;
    charging_wattage: string;
    wireless_charging: string;
    reverse_charging: string;

    // Connectivity
    bands_5g: string;
    volte_4g: string;
    wifi: string;
    bluetooth: string;
    nfc: string;
    gps: string;
    ir_blaster: string;

    // Build
    body_material: string;
    weight: string;
    thickness: string;
    ip_rating: string;

    // Software
    os: string;
    ui: string;
    update_policy: string;

    // Audio
    stereo_speakers: string;
    jack_3_5mm: string;
    hi_res_audio: string;

    // Sensors
    fingerprint: string;
    face_unlock: string;
    sensor_gyro: string;
    sensor_compass: string;
    sensor_proximity: string;
    sensor_accelerometer: string;

    // Other
    sim_type: string;
    usb_type: string;
    cooling: string;
    benchmarks: string;
    sar: string;
}

export default function MobileList({ mobiles }: { mobiles: Mobile[] }) {
    const [leftSelection, setLeftSelection] = useState<Mobile | null>(null);
    const [rightSelection, setRightSelection] = useState<Mobile | null>(null);
    const [leftSearch, setLeftSearch] = useState('');
    const [rightSearch, setRightSearch] = useState('');

    const filterMobiles = (search: string) => {
        if (!search) return mobiles; // Return all mobiles if no search

        const query = search.toLowerCase().trim();
        const tokens = query.split(/\s+/).filter(t => t.length > 0);

        if (tokens.length === 0) return mobiles;

        return mobiles
            .map(mobile => {
                const name = mobile.name.toLowerCase();
                const brand = mobile.brand.toLowerCase();
                let score = 0;

                // 1. Exact Name Match (Highest Priority)
                if (name === query) score += 100;

                // 2. Name Starts With Query
                else if (name.startsWith(query)) score += 80;

                // 3. Brand Starts With Query
                else if (brand.startsWith(query)) score += 60;

                // 4. Name Contains Query
                else if (name.includes(query)) score += 40;

                // 5. Token Matching (Flexible Search)
                // Check how many tokens match the name or brand
                let matches = 0;
                tokens.forEach(token => {
                    if (name.includes(token) || brand.includes(token)) {
                        matches++;
                    }
                });

                if (matches === tokens.length) {
                    score += 20; // Bonus for matching all tokens
                } else if (matches > 0) {
                    score += (matches / tokens.length) * 10; // Partial match score
                }

                return { mobile, score };
            })
            .filter(item => item.score > 0) // Filter out non-matches
            .sort((a, b) => b.score - a.score) // Sort by score descending
            .map(item => item.mobile);
    };

    const renderColumn = (
        selection: Mobile | null,
        setSelection: (m: Mobile | null) => void,
        search: string,
        setSearch: (s: string) => void,
        placeholder: string
    ) => {
        const searchResults = filterMobiles(search);

        return (
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {!selection ? (
                    <div className="search-container">
                        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--secondary)' }}>{placeholder}</h2>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search for a mobile..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="search-input"
                                style={{ paddingLeft: '50px' }}
                            />
                            <span style={{ position: 'absolute', left: '20px', top: '22px', fontSize: '1.2rem', opacity: 0.5 }}>🔍</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', maxHeight: '700px', paddingRight: '8px' }}>
                            {searchResults.length > 0 ? (
                                searchResults.map(mobile => (
                                    <div
                                        key={mobile.id}
                                        onClick={() => { setSelection(mobile); setSearch(''); }}
                                        className="mobile-list-item"
                                    >
                                        <Image src={mobile.image_url} alt={mobile.name} className="mobile-thumb" width={56} height={56} unoptimized />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>{mobile.name}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--secondary)' }}>{mobile.brand}</div>
                                        </div>
                                        <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                                            ₹{mobile.price.toLocaleString('en-IN')}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', color: 'var(--secondary)', padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontSize: '3rem', opacity: 0.3 }}>📱</span>
                                    <div>No devices found matching &quot;{search}&quot;</div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in selected-device-container">
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                            <button
                                onClick={() => setSelection(null)}
                                className="close-btn"
                            >
                                <span>✕</span> Change Device
                            </button>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div className="device-image-container">
                                <Image src={selection.image_url} alt={selection.name} className="device-image" fill style={{ objectFit: 'contain' }} unoptimized />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: '1.2' }}>{selection.name}</h2>

                            <div className="rating-badge">
                                <span style={{ fontSize: '1.2rem' }}>★</span>
                                {selection.overall_rating ? Number(selection.overall_rating).toFixed(1) : 'N/A'} / 10
                            </div>

                            <div className="price-tag">
                                ₹{selection.price.toLocaleString('en-IN')}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <SectionHeader title="Performance" icon="🚀" />
                            <SpecRow label="SoC / Chipset" value={selection.chipset} />
                            <SpecRow label="CPU Cores" value={selection.cpu_cores} />
                            <SpecRow label="Clock Speeds" value={selection.cpu_freq} />
                            <SpecRow label="GPU" value={selection.gpu} />
                            <SpecRow label="Fabrication" value={selection.process_nm} />
                            <SpecRow label="NPU / AI" value={selection.npu} />

                            <SectionHeader title="Memory & Storage" icon="💾" />
                            <SpecRow label="RAM" value={`${selection.ram_capacity} (${selection.ram_type})`} />
                            <SpecRow label="Storage" value={`${selection.storage_capacity} (${selection.storage_type})`} />
                            <SpecRow label="Expandable" value={selection.expandable_storage} />

                            <SectionHeader title="Rear Camera" icon="📸" />
                            <SpecRow label="Main Sensor" value={selection.rear_main_mp} />
                            <SpecRow label="Details" value={`Size: ${selection.rear_sensor_size}, Aperture: ${selection.rear_aperture}`} />
                            <SpecRow label="Ultra-wide" value={selection.rear_ultrawide} />
                            <SpecRow label="Telephoto" value={selection.rear_telephoto} />
                            <SpecRow label="Features" value={`Macro: ${selection.rear_macro}, OIS: ${selection.rear_ois}`} />
                            <SpecRow label="Video" value={selection.rear_video} />

                            <SectionHeader title="Front Camera" icon="🤳" />
                            <SpecRow label="Selfie Cam" value={`${selection.front_mp} (${selection.front_aperture})`} />
                            <SpecRow label="Video" value={selection.front_video} />

                            <SectionHeader title="Display" icon="📱" />
                            <SpecRow label="Specs" value={`${selection.display_size} ${selection.display_type}`} />
                            <SpecRow label="Resolution" value={selection.resolution} />
                            <SpecRow label="Refresh Rate" value={selection.refresh_rate} />
                            <SpecRow label="Brightness" value={selection.brightness} />
                            <SpecRow label="Protection" value={selection.protection} />

                            <SectionHeader title="Battery" icon="🔋" />
                            <SpecRow label="Capacity" value={selection.battery_capacity} />
                            <SpecRow label="Charging" value={selection.charging_wattage} />
                            <SpecRow label="Wireless" value={selection.wireless_charging} />

                            <SectionHeader title="Connectivity" icon="📡" />
                            <SpecRow label="5G / 4G" value={`${selection.bands_5g !== 'No' ? '5G Supported' : '4G Only'}`} />
                            <SpecRow label="Wi-Fi / BT" value={`${selection.wifi} / BT ${selection.bluetooth}`} />
                            <SpecRow label="NFC / IR" value={`NFC: ${selection.nfc}, IR: ${selection.ir_blaster}`} />

                            <SectionHeader title="Build" icon="🏗️" />
                            <SpecRow label="Material" value={selection.body_material} />
                            <SpecRow label="Dimensions" value={`${selection.thickness} / ${selection.weight}`} />
                            <SpecRow label="IP Rating" value={selection.ip_rating} />

                            <SectionHeader title="Software" icon="🤖" />
                            <SpecRow label="OS" value={selection.os} />
                            <SpecRow label="UI" value={selection.ui} />
                            <SpecRow label="Updates" value={selection.update_policy} />

                            <SectionHeader title="Audio & Sensors" icon="🔊" />
                            <SpecRow label="Speakers" value={selection.stereo_speakers === 'Yes' ? 'Stereo' : 'Mono'} />
                            <SpecRow label="3.5mm Jack" value={selection.jack_3_5mm} />
                            <SpecRow label="Fingerprint" value={selection.fingerprint} />
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="grid">
            {renderColumn(leftSelection, setLeftSelection, leftSearch, setLeftSearch, "Select First Device")}
            {leftSelection && rightSelection && (
                <div className="vs-badge">VS</div>
            )}
            {renderColumn(rightSelection, setRightSelection, rightSearch, setRightSearch, "Select Second Device")}
        </div>
    );
}

function SectionHeader({ title, icon }: { title: string, icon: string }) {
    return (
        <div className="section-header">
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            {title}
        </div>
    );
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="spec-row">
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value || '-'}</span>
        </div>
    );
}
