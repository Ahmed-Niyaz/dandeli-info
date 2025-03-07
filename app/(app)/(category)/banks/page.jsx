"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaHashtag } from "react-icons/fa";
import bankData from "@/data/banksData.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BanksPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-card py-12 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FaBuilding className="text-5xl mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Banks in Dandeli
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Find all banking services available in our city
            </p>
          </div>
        </div>
      </div>

      {/* Banks Table */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaUniversity className="text-primary" />
                      <span>Bank</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaHashtag className="text-primary" />
                      <span>IFSC</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>Address</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-primary" />
                      <span>Contact</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-primary" />
                      <span>Email</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bankData.map((bank, index) => (
                  <tr 
                    key={index}
                    className="group hover:bg-accent transition-colors text-foreground"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 shrink-0">
                          <Image
                            src={"https://imgs.search.brave.com/semj0l48CuSRAuCy-5pyHuarj0VffguQwFblXUQJ5nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2Nob29sLXBp/Y3R1cmUtYmFja2dy/b3VuZC1rYngzd2tx/dWYwbGJsc3g3Lmpw/Zw"}
                            alt={bank.name}
                            fill
                            className="object-contain rounded-full"
                            quality={100}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {bank.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {bank.branch}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm">{bank.ifsc}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">{bank.address}</div>
                    </td>
                    <td className="px-6 py-4">
                      {bank.contact_number && (
                        <Button 
                          variant="link" 
                          asChild 
                          className="p-0 h-auto font-medium text-primary hover:no-underline"
                        >
                          <a href={`tel:${bank.contact_number}`} className="flex items-center gap-2 text-sm">
                            <FaPhone className="text-sm" />
                            {bank.contact_number}
                          </a>
                        </Button>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {bank.email && (
                        <Button 
                          variant="link" 
                          asChild 
                          className="p-0 h-auto font-medium text-primary hover:no-underline"
                        >
                          <a href={`mailto:${bank.email}`} className="flex items-center gap-2 text-sm">
                            <FaEnvelope className="text-sm" />
                            {bank.email}
                          </a>
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}