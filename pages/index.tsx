import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Pen, Monitor, Share2, BadgeCheck } from 'lucide-react';





export default function HomePage() {
    const features = [
        {
            title: 'Expert Team',
            description: 'Experienced digital experts who deliver results.'
        },
        {
            title: 'Client-Focused',
            description: 'We listen to your needs and tailor solutions.'
        },
        {
            title: 'Proven Success',
            description: "We've helped many businesses achieve their goals."
        },
        {
            title: 'Collaborative Approach',
            description: 'We work closely with you, keeping you informed.'
        },
        {
            title: 'Community Impact',
            description: 'We support local businesses and talent.'
        },
        {
            title: 'Affordable Pricing',
            description: 'We provide value for your investment.'
        }
    ];

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="relative w-full min-h-screen">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                        style={{
                            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/8c8c/e10a/f101e3a4e62912c6245d8c219460fa14?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XB3JQhrC8V0l8ekxzbOCs9j2W3PCA2QrXM2FtfJGCtuMSSLQNTvJXNjagnT-zQYpyj74ppUUPyhhjSa-CCkdp2D78Q2cmYJWm3qrcgYACcEwkZRHWM-lxD5~uXB14dTuuBNvJW0LnGoaM4SJQshqmSwpUuRmetzIEUikv1un0EX7DeJV3XMup7US9rVFe~KF903E0~PTDXBJCZ8YD6wACHtdmulOPR~CgrkYdVoKfhjFoIC~Hif2MeG~mLne~FGXjvXelBBRkHmNvyt5Pnr3n-DmuTq69~bHuVaOfNwupur6zSm4kOk5R~FUgJRTiykGDz5ar225oLT5Xn0ucLpvzA__')"
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-60" />

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">

                        <div className="text-center">
                            <h1 className="text-6xl font-bold mb-4">Elevate Solutions Agency</h1>
                            <p className="text-xl mb-8">Your Partner for Digital Success in the Philippines.</p>
                            <button className="bg-blue-600 px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" text-white py-20 px-4">
                    {/* What We Do Section */}
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-lg text-gray-400 mb-4">WHAT WE DO</h2>

                        <div className="mb-12">
                            <h3 className="text-4xl font-light mb-8 max-w-3xl">
                                We empower businesses and communities through innovative technology, creative design, and strategic digital marketing.
                            </h3>

                            <div className="flex items-center justify-between border-t border-gray-700 py-6">
                                <p className="text-gray-400 max-w-2xl">
                                    We empower businesses and communities through innovative technology, creative design, and strategic digital marketing.
                                </p>
                                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition">
                                    <span>Learn More</span>
                                    <span className="text-xl">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Our Services Section */}
                        <div className="mt-20">
                            <h2 className="text-lg text-gray-400 mb-4">OUR SERVICES</h2>
                            <div className="flex justify-between items-center mb-12">
                                <h3 className="text-3xl">
                                    Discover how we can help you achieve your business goals with our range of{' '}
                                    <span className="text-blue-400">digital solutions</span>.
                                </h3>
                                <div className="flex space-x-4">
                                    <button className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition">
                                        ←
                                    </button>
                                    <button className="p-2 border border-gray-700 rounded-full hover:bg-gray-800 transition">
                                        →
                                    </button>
                                </div>
                            </div>

                            {/* Services Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Web Programming Card */}
                                <div className="bg-[#0D1829] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition duration-300">
                                    <Monitor className="w-12 h-12 text-blue-400 mb-6" />
                                    <h4 className="text-xl mb-4">Web Programming</h4>
                                    <p className="text-gray-400">
                                        Custom websites that are user-friendly and effective.
                                    </p>
                                </div>

                                {/* Creative Digital Graphics Card */}
                                <div className="bg-[#0D1829] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition duration-300">
                                    <Pen className="w-12 h-12 text-blue-400 mb-6" />
                                    <h4 className="text-xl mb-4">Creative Digital Graphics</h4>
                                    <p className="text-gray-400">
                                        Stunning visuals that capture attention and communicate your brand.
                                    </p>
                                </div>

                                {/* Social Media Management Card */}
                                <div className="bg-[#0D1829] p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition duration-300">
                                    <Share2 className="w-12 h-12 text-blue-400 mb-6" />
                                    <h4 className="text-xl mb-4">Social Media Management</h4>
                                    <p className="text-gray-400">
                                        Engaging content and targeted campaigns to build your online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-lg text-gray-400 mb-4">WHY CHOOSE US?</h2>

                        <h3 className="text-4xl font-light mb-16">
                            We're your partner for digital success.
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="rounded-full p-1 border border-blue-400 group-hover:border-blue-300 transition-colors">
                                        <BadgeCheck className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl mb-2 group-hover:text-blue-300 transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* CTA Section */}
                    <div className="max-w-4xl mx-auto px-4 py-20">
                        <div className="bg-[#0D1829] rounded-2xl p-12 text-center">
                            <h2 className="text-4xl mb-4">
                                Ready to take your business to the next level?
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Let Elevate Solutions Agency be your partner in digital success.
                            </p>
                            <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>


            </section>
        </DefaultLayout>
    );
}
