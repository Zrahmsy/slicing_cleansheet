'use client';
import LandingHeader from '../../LandingHeader';
import React from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LandingHeader />
      {children}
    </div>
  );
} 