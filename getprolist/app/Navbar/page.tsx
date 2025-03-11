'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Menu, X, User, LogIn, UserPlus, Phone, Briefcase } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Navbarpage = () => {

  return (
    <>
    <header >
      {/* Top Bar */}
      <div className="flex justify-between px-5 bg-orange-600/90 text-white py-1 text-sm">
      <div className="w-full px-4 md:px-4 lg:px-8 py-2 flex justify-between items-center">
          {/* Mobile Logo */}
          <div className="md:hidden bg-white rounded-lg p-1 shadow-md">
            <Image src="/logo.png" alt="GetProList Logo" width={120} height={30} priority />
          </div>

          {/* Desktop Tagline */}
          <h1 className="font-bold md:flex hidden">GetProList :<span className="font-normal"> India Best Local Search Engine</span></h1>


          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span>Hi, Guest</span>
            <Link href="/signin" className="hover:underline transition">Sign In</Link>
            <Link href="/register" className="hover:underline transition">Register</Link>
            <Link href="/leads" className="hover:underline transition">GET LEADS</Link>
            <Link href="/contact" className="hover:underline transition">Contact</Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-b from-white to-orange-50 border-l border-orange-200">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <Image src="/logo.png" alt="GetProList Logo" width={130} height={40} priority />
                  <SheetClose>
                    <X className="w-5 h-5 text-orange-600/90" />
                  </SheetClose>
                </div>
                
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link href="/signin" className="flex items-center gap-2 text-orange-700 hover:text-orange-500 transition px-2 py-2 hover:bg-orange-100 rounded-md">
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </Link>
                  <Link href="/register" className="flex items-center gap-2 text-orange-700 hover:text-orange-500 transition px-2 py-2 hover:bg-orange-100 rounded-md">
                    <UserPlus className="w-5 h-5" />
                    <span>Register</span>
                  </Link>
                  <Link href="/leads" className="flex items-center gap-2 text-orange-700 hover:text-orange-500 transition px-2 py-2 hover:bg-orange-100 rounded-md">
                    <Briefcase className="w-5 h-5" />
                    <span>Get Leads</span>
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 text-orange-700 hover:text-orange-500 transition px-2 py-2 hover:bg-orange-100 rounded-md">
                    <Phone className="w-5 h-5" />
                    <span>Contact</span>
                  </Link>
                  <div className="border-t border-orange-200 my-2"></div>
                  <Link href="/add-business" className="flex items-center gap-2 text-orange-700 hover:text-orange-500 transition px-2 py-2 hover:bg-orange-100 rounded-md">
                    <Plus className="w-5 h-5" />
                    <span>Add Business</span>
                  </Link>
                </nav>
                
                <div className="mt-auto mb-6">
                  <div className="bg-orange-100 rounded-lg p-4 text-sm text-orange-800">
                    <h3 className="font-bold mb-2">Need Help?</h3>
                    <p>Contact our support team for assistance with your business listing.</p>
                    <Link href="/contact" className="mt-3 inline-block font-medium text-orange-600/90 hover:text-orange-500">
                      Contact Support →
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-20 py-3 flex justify-between items-center">
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Image src="/logo.png" alt="GetProList Logo" width={160} height={40} priority />
          </div>
          
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/signin" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-medium">
              <User className="w-5 h-5 text-orange-600/90" />
              <span>Sign In</span>
            </Link>
            <Link 
              href="/add-business" 
              className="flex items-center gap-2 bg-orange-600/90 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition font-medium"
            >
              <Plus className="w-5 h-5" />
              <span>Add Business</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
    
  </>
  );
};

export default Navbarpage;