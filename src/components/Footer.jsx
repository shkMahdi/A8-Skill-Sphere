import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-white/10 bg-slate-900">
                <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
                    <div>
                        <h3 className="text-lg font-bold text-cyan-400">SkillSphere</h3>
                        <p className="mt-2 text-sm text-slate-300">
                            Learn in-demand skills with practical courses led by industry mentors.
                        </p>
                        <p className="mt-2 text-sm text-slate-400">Contact: support@skillsphere.dev</p>
                    </div>

                    <div className='border-l border-l-white/10 pl-8'>
                        <h4 className="font-semibold text-white">Social Links</h4>
                        <div className="mt-3 flex gap-3 text-sm">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="link link-hover">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="link link-hover">
                                LinkedIn
                            </a>
                            <a href="https://x.com" target="_blank" rel="noreferrer" className="link link-hover">
                                X
                            </a>
                        </div>
                    </div>

                    <div className='border-l border-l-white/10 pl-8'>
                        <h4 className="font-semibold text-white">Legal</h4>
                        <div className="text-sm mt-3 flex flex-col gap-2 text-slate-300">
                            <Link href="/terms" className="link link-hover">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy" className="link link-hover">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='max-w-6xl mx-auto text-sm text-left text-slate-400 border-t border-white/10 px-4 py-4 md:px-6'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <p>Designed by Team SkillSphere</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;