import { openDb } from '@/lib/db';
import MobileList from '@/components/MobileList';

// Force dynamic rendering was removed to support static export for InfinityFree.
// The data will be fetched once at build time.

async function getMobiles() {
    const db = await openDb();
    try {
        return await db.all('SELECT * FROM mobiles');
    } finally {
        await db.close();
    }
}

export default async function Home() {
    const mobiles = await getMobiles();

    return (
        <main style={{ minHeight: '100vh', padding: '40px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 className="animate-fade-in">Mobile Comparison</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto', marginTop: '1rem' }} className="animate-fade-in">
                        Compare the latest smartphones side-by-side. Select up to 3 devices to see detailed specifications.
                    </p>
                </div>

                <MobileList mobiles={mobiles} />
            </div>
        </main>
    );
}
